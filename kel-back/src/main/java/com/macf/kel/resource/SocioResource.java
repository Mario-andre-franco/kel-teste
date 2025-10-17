package com.macf.kel.controller;


import com.macf.kel.model.dto.SocioDTO;
import com.macf.kel.service.SocioService;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/v1/socios")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SocioResource {

    @Inject
    SocioService socioService;

    @GET
    public Response listar(@QueryParam("participacaoMin") double participacaoMin) {
        List<SocioDTO> socios = socioService.listarSocios(participacaoMin);
        return Response.ok(socios).build();
    }

    @GET
    @Path("/{cnpj}")
    public Response buscarPorCnpj(@PathParam("cnpj") String cnpj) {
        var socio = socioService.buscarSocioPorCnpj(cnpj);
        return socio != null ? Response.ok(socio).build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
