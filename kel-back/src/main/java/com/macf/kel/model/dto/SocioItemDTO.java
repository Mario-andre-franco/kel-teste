package com.macf.kel.model.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SocioItemDTO {

    private String nome;
    private String cnpj;
    private String participacao;
    private String cep;
}
