package com.macf.kel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class KelApplication {

	public static void main(String[] args) {
		SpringApplication.run(KelApplication.class, args);
	}

}
