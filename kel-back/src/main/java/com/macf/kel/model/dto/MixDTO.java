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
public class MixDTO {
    private String consultante;
    private String produto;
    private String dataConsulta;
    private String versaoProduto;
    private String versao;
    private boolean isParcial;
    private String usuario;
    private String centroCusto;
    private QuadroSocietarioDTO quadroSocietario;
}
