package com.macf.kel.model.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class SocioDTO {

    private String nome;
    private String cnpj;
    private String participacao;
    private String mapa;
    private ReceitaDTO receita;
}
