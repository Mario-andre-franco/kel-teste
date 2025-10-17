package com.macf.kel.client;

import com.macf.kel.model.dto.QuadroSocietarioResponseDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "keltechClient", url = "https://keltech-test.wiremockapi.cloud")
public interface KeltechClient {

    @GetMapping("/json")
    QuadroSocietarioResponseDTO getQuadroSocietario();
}
