export interface Partner {
    id: string;
    nome: string;
    cnpj: string;
    participacao: number;
    cnpjData?: CNPJData;
  }
  
  export interface CNPJData {
    razaoSocial: string;
    cnae: string;
    descricaoAtividade: string;
    endereco: {
      logradouro: string;
      numero: string;
      complemento?: string;
      bairro: string;
      cidade: string;
      estado: string;
      cep: string;
      latitude?: number;
      longitude?: number;
    };
  }
  