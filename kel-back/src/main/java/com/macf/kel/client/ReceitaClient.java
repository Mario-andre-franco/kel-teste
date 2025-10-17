package com.macf.kel.client;


import com.macf.kel.model.dto.ReceitaDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "receitaClient", url = "https://publica.cnpj.ws")
public interface ReceitaClient {

    @GetMapping
    ReceitaDTO getDadosCNPJ(@PathVariable String cnpj);
}
