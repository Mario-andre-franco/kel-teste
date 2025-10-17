import React, { useState } from 'react';
import Logo from '@/components/Logo';

interface Socio {
  id: string;
  nome: string;
  cnpj: string;
  participacao: number;
  cnaes: string[];
}

const Index: React.FC = () => {
  const [participacaoMinima, setParticipacaoMinima] = useState<string>('');
  const [socios, setSocios] = useState<Socio[]>([]);
  const [selectedSocio, setSelectedSocio] = useState<Socio | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const mockSocios: Socio[] = [
    {
      id: '1',
      nome: 'Marcelo Soares Da Silva Correia Neto',
      cnpj: '53.535.555/0001-55',
      participacao: 25,
      cnaes: ['7311-4/00 – Agências de publicidade']
    },
    {
      id: '2',
      nome: 'Fabricio Azevedo Portella',
      cnpj: '53.535.555/0001-55',
      participacao: 30,
      cnaes: ['7311-4/00 – Agências de publicidade']
    }
  ];

  const handleSearch = () => {
    const min = parseFloat(participacaoMinima) || 0;
    const filtered = mockSocios.filter(socio => socio.participacao >= min);
    setSocios(filtered);
    setShowResults(true);
  };

  const handleSocioClick = (socio: Socio) => {
    setSelectedSocio(socio);
    setShowDetails(true);
  };

  const handleBackToResults = () => {
    setShowDetails(false);
  };

  const handleBackToSearch = () => {
    setShowResults(false);
    setShowDetails(false);
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
                  className="bg-[#1E1E1E] text-[#FFFFFF] px-6 py-2 rounded-lg hover:opacity-90 transition-colors"
                >
                  Pesquisar
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
                      key={socio.id}
                      className={`${index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F3F3F3]'} hover:bg-gray-100 cursor-pointer`}
                      onClick={() => handleSocioClick(socio)}
                    >
                      <td className="px-4 py-3 text-[#1E1E1E]">{socio.nome}</td>
                      <td className="px-4 py-3 text-[#1E1E1E]">{socio.cnpj}</td>
                      <td className="px-4 py-3 text-[#1E1E1E]">{socio.participacao}%</td>
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
                  <span className="ml-2 text-[#1E1E1E]">{selectedSocio.participacao}%</span>
                </div>
                <div>
                  <span className="font-medium text-[#1E1E1E]">CNAES:</span>
                  <div className="mt-2">
                    {selectedSocio.cnaes.map((cnae, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-[#1E1E1E]">{cnae}</span>
                        <svg className="w-4 h-4 text-[#1E1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg border overflow-hidden w-full max-w-4xl">
              <div className="h-96 bg-[#F3F3F3] flex items-center justify-center">
                <div className="text-center text-[#1E1E1E]">
                  <svg className="w-16 h-16 mx-auto mb-4 text-[#1E1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>Mapa da localização</p>
                  <div className="w-4 h-4 bg-[#1E1E1E] rounded-full mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;