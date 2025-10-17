export interface SocioDTO {
  nome: string;
  cnpj: string;
  participacao: string;
  mapa: string | null;
  receita: ReceitaDTO | null;
}

export interface ReceitaDTO {
  nome: string;
  abertura: string;
  natureza_juridica: string;
  cep: string;
  municipio: string;
}
