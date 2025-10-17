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
public class QuadroSocietarioDTO {

    private boolean success;
    private String message;
    private String info;
    private QuadroSocietarioDataDTO data;
}
