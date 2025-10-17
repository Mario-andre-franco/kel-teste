import { SocioDTO } from '@/types/socio';

const API_BASE_URL = 'http://localhost:8080/v1/socios';

export const socioService = {
  async listarSocios(participacaoMin: number): Promise<SocioDTO[]> {
    const response = await fetch(`${API_BASE_URL}?participacaoMin=${participacaoMin}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar sócios');
    }
    return response.json();
  },

  async buscarPorCnpj(cnpj: string): Promise<SocioDTO | null> {
    const encodedCnpj = encodeURIComponent(cnpj);
    const response = await fetch(`${API_BASE_URL}/${encodedCnpj}`);
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error('Erro ao buscar sócio');
    }
    return response.json();
  }
};
