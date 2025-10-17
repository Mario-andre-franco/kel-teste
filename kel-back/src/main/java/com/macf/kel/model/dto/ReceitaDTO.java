package com.macf.kel.model.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReceitaDTO {

    private String cnpj_raiz;
    private String razao_social;
    private String capital_social;
    private String responsavel_federativo;
    private String atualizado_em;
    private PorteDTO porte;
    private NaturezaJuridicaDTO natureza_juridica;
    private QualificacaoResponsavelDTO qualificacao_do_responsavel;
    private Object simples;
    private Object estabelecimento;
}
