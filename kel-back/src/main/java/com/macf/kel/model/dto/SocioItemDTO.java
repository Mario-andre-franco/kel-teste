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
public class SocioItemDTO {

    private String cnpjEmpresa;
    private Double participacao;
    private String nome;
    private String documento;
    private String dataEntrada;
    private String dataSaida;
    private String cargoSociedade;
    private String cidade;
    private String uf;
    private String cep;
    private boolean alerta;
    private boolean restricao;
    private String situacao;
}
