export interface NaturezaJuridicaDTO {
    id: string;
    descricao: string;
  }
  
  export interface PorteDTO {
    id: string;
    descricao: string;
  }
  
  export interface QualificacaoResponsavelDTO {
    id: number;
    descricao: string;
  }
  
  export interface ReceitaDTO {
    razao_social: string;
    capital_social: string;
    natureza_juridica: NaturezaJuridicaDTO;
    porte: PorteDTO;
    qualificacao_do_responsavel: QualificacaoResponsavelDTO;
  }
  
  export interface SocioDTO {
    nome: string;
    cnpj: string;
    participacao: string;
    mapa?: string;
    receita?: ReceitaDTO;
  }
  