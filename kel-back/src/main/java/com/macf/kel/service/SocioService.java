package com.macf.kel.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.macf.kel.model.dto.*;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.jboss.logging.Logger;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@ApplicationScoped
public class SocioService {

    private static final Logger LOG = Logger.getLogger(SocioService.class);

    @Inject
    ObjectMapper objectMapper;

    @ConfigProperty(name = "api.keltech.url")
    String keltechUrl;

    @ConfigProperty(name = "api.receita.url")
    String receitaUrl;

    @ConfigProperty(name = "api.maps.url")
    String mapsUrl;

    private final HttpClient client = HttpClient.newHttpClient();

    public List<SocioDTO> listarSocios(double participacaoMin) {
        try {
            QuadroSocietarioResponseDTO response = buscarDadosKeltech();

            if (response == null
                    || response.getMix() == null
                    || response.getMix().getQuadroSocietario() == null
                    || response.getMix().getQuadroSocietario().getData() == null
                    || response.getMix().getQuadroSocietario().getData().getQuadroSocietario() == null) {
                LOG.warn("Nenhum dado de sócio encontrado na resposta da API Keltech");
                return Collections.emptyList();
            }

            List<SocioItemDTO> sociosKeltech = response
                    .getMix()
                    .getQuadroSocietario()
                    .getData()
                    .getQuadroSocietario();

            List<SocioDTO> resultado = new ArrayList<>();

            for (SocioItemDTO socio : sociosKeltech) {
                Double participacao = socio.getParticipacao();

                if (participacao != null && participacao >= participacaoMin) {
                    SocioDTO dto = new SocioDTO();
                    dto.setNome(socio.getNome());
                    dto.setCnpj(socio.getCnpjEmpresa());
                    dto.setParticipacao(participacao.toString());
                    resultado.add(dto);
                }
            }

            return resultado;

        } catch (Exception e) {
            LOG.error("Erro ao listar sócios: " + e.getMessage(), e);
            return Collections.emptyList();
        }
    }

    public SocioDTO buscarSocioPorCnpj(String cnpj) {
        try {
            List<SocioDTO> socios = listarSocios(0);
            if (socios.isEmpty()) {
                LOG.warn("Nenhum sócio disponível para busca");
                return null;
            }

            String cnpjLimpo = cnpj.replaceAll("\\D", "");
            SocioDTO socioEncontrado = null;

            for (SocioDTO socio : socios) {
                String cnpjSocio = socio.getCnpj() != null ? socio.getCnpj().replaceAll("\\D", "") : "";
                if (cnpjSocio.equals(cnpjLimpo)) {
                    socioEncontrado = socio;
                    break;
                }
            }

            if (socioEncontrado == null) {
                LOG.info("Sócio com CNPJ " + cnpj + " não encontrado");
                return null;
            }

            ReceitaDTO receita = buscarDadosReceita(cnpjLimpo);
            socioEncontrado.setReceita(receita);

            String mapa = gerarLinkMapa(receita != null ? receita.getRazao_social() : socioEncontrado.getNome());
            socioEncontrado.setMapa(mapa);

            return socioEncontrado;

        } catch (Exception e) {
            LOG.error("Erro ao buscar sócio: " + e.getMessage(), e);
            return null;
        }
    }

    private QuadroSocietarioResponseDTO buscarDadosKeltech() throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(keltechUrl))
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return objectMapper.readValue(response.body(), QuadroSocietarioResponseDTO.class);
    }

    private ReceitaDTO buscarDadosReceita(String cnpj) throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(receitaUrl + cnpj))
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return objectMapper.readValue(response.body(), ReceitaDTO.class);
    }

    private String gerarLinkMapa(String termoBusca) {
        if (termoBusca == null || termoBusca.isBlank()) {
            return mapsUrl;
        }
        return mapsUrl + "?q=" + termoBusca.replace(" ", "+");
    }
}
