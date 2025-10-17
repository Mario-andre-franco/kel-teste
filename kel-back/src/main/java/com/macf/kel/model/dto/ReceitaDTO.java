package com.macf.kel.model.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReceitaDTO {

    private String nome;
    private String abertura;
    private String natureza_juridica;
    private String cep;
    private String municipio;
}
