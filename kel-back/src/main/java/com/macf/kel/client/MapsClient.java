package com.macf.kel.client;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@FeignClient(name = "mapsClient", url = "https://www.google.com/maps")
public interface MapsClient {

    @GetMapping
    @ResponseBody
    String getMapa(@RequestParam("q") String endereco);
}
