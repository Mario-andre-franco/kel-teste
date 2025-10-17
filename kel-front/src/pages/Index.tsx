import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { SocioDTO } from '@/types/socio';
import { socioService } from '@/services/api';

const Index: React.FC = () => {
  const [participacaoMinima, setParticipacaoMinima] = useState<string>('');
  const [socios, setSocios] = useState<SocioDTO[]>([]);
  const [selectedSocio, setSelectedSocio] = useState<SocioDTO | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);
      const min = parseFloat(participacaoMinima) || 0;
      const result = await socioService.listarSocios(min);
      setSocios(result);
      setShowResults(true);
    } catch (err) {
      setError('Erro ao buscar sócios. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocioClick = async (socio: SocioDTO) => {
    try {
      setLoading(true);
      setError(null);
      const result = await socioService.buscarPorCnpj(socio.cnpj);
      if (result) {
        setSelectedSocio(result);
        setShowDetails(true);
      } else {
        setError('Sócio não encontrado.');
      }
    } catch (err) {
      setError('Erro ao buscar detalhes do sócio.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToResults = () => {
    setShowDetails(false);
  };

  const handleBackToSearch = () => {
    setShowResults(false);
    setShowDetails(false);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <header className="bg-[#FFFFFF] border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Logo size="md" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {!showResults && !showDetails && (
          <div className="flex justify-center">
            <div className="bg-[#FFFFFF] rounded-lg border border-blue-200 p-6 w-full max-w-2xl">
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              <div className="flex items-center gap-4">
                <label className="text-[#1E1E1E] font-medium whitespace-nowrap">
                  Participação Mínima (%)
                </label>
                <input
                  type="number"
                  value={participacaoMinima}
                  onChange={(e) => setParticipacaoMinima(e.target.value)}
                  placeholder="Digitar"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F3F3F3]"
                />
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="bg-[#1E1E1E] text-[#FFFFFF] px-6 py-2 rounded-lg hover:opacity-90 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Pesquisando...' : 'Pesquisar'}
                </button>
              </div>
            </div>
          </div>
        )}

        {showResults && !showDetails && (
          <div className="space-y-4 flex flex-col items-center">
            <button
              onClick={handleBackToSearch}
              className="text-[#1E1E1E] hover:opacity-70 mb-4"
            >
              ← Voltar à busca
            </button>
            
            <div className="bg-[#FFFFFF] rounded-lg overflow-hidden border w-full max-w-4xl">
              <table className="w-full">
                <thead className="bg-[#1E1E1E] text-[#FFFFFF]">
                  <tr>
                    <th className="px-4 py-3 text-left">Nome</th>
                    <th className="px-4 py-3 text-left">CNPJ</th>
                    <th className="px-4 py-3 text-left">Participação</th>
                    <th className="px-4 py-3 text-left">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {socios.map((socio, index) => (
                    <tr 
                      key={socio.cnpj}
                      className={`${index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F3F3F3]'} hover:bg-gray-100 cursor-pointer`}
                      onClick={() => handleSocioClick(socio)}
                    >
                      <td className="px-4 py-3 text-[#1E1E1E]">{socio.nome}</td>
                      <td className="px-4 py-3 text-[#1E1E1E]">{socio.cnpj}</td>
                      <td className="px-4 py-3 text-[#1E1E1E]">{socio.participacao}</td>
                      <td className="px-4 py-3">
                        <svg className="w-5 h-5 text-[#1E1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {showDetails && selectedSocio && (
          <div className="space-y-6 flex flex-col items-center">
            <button
              onClick={handleBackToResults}
              className="text-[#1E1E1E] hover:opacity-70 mb-4"
            >
              ← Voltar aos resultados
            </button>

            <div className="bg-[#FFFFFF] rounded-lg border p-6 w-full max-w-2xl">
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-[#1E1E1E]">Sócio:</span>
                  <span className="ml-2 text-[#1E1E1E]">{selectedSocio.nome}</span>
                </div>
                <div>
                  <span className="font-medium text-[#1E1E1E]">CNPJ:</span>
                  <span className="ml-2 text-[#1E1E1E]">{selectedSocio.cnpj}</span>
                </div>
                <div>
                  <span className="font-medium text-[#1E1E1E]">Participação:</span>
                  <span className="ml-2 text-[#1E1E1E]">{selectedSocio.participacao}</span>
                </div>
                {selectedSocio.receita && (
                  <>
                  <div>
                    <span className="font-medium text-[#1E1E1E]">Empresa:</span>
                    <span className="ml-2 text-[#1E1E1E]">{selectedSocio.receita.razao_social}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#1E1E1E]">Capital Social:</span>
                    <span className="ml-2 text-[#1E1E1E]">
                      {selectedSocio.receita.capital_social
                        ? `R$ ${Number(selectedSocio.receita.capital_social).toLocaleString('pt-BR')}`
                        : '-'}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-[#1E1E1E]">Natureza Jurídica:</span>
                    <span className="ml-2 text-[#1E1E1E]">
                      {selectedSocio.receita.natureza_juridica?.descricao || '-'}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-[#1E1E1E]">Porte:</span>
                    <span className="ml-2 text-[#1E1E1E]">
                      {selectedSocio.receita.porte?.descricao || '-'}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-[#1E1E1E]">Qualificação do Responsável:</span>
                    <span className="ml-2 text-[#1E1E1E]">
                      {selectedSocio.receita.qualificacao_do_responsavel?.descricao || '-'}
                    </span>
                  </div>
                </>
                
                )}
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg border overflow-hidden w-full max-w-4xl">
              {selectedSocio.mapa ? (
                <iframe
                  src={selectedSocio.mapa}
                  width="100%"
                  height="384"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="h-96 bg-[#F3F3F3] flex items-center justify-center">
                  <div className="text-center text-[#1E1E1E]">
                    <svg className="w-16 h-16 mx-auto mb-4 text-[#1E1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p>Mapa não disponível</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;