package com.macf.kel.client;

import com.macf.kel.config.FeignConfig;
import com.macf.kel.model.dto.QuadroSocietarioResponseDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "keltechClient", url = "https://keltech-test.wiremockapi.cloud", configuration = FeignConfig.class)
public interface KeltechClient {

    @GetMapping("/json")
    QuadroSocietarioResponseDTO getQuadroSocietario();
}
