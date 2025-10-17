package com.macf.kel.exception;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;
import java.util.HashMap;
import java.util.Map;

@Provider
public class GlobalExceptionHandler implements ExceptionMapper<Exception> {

    @Override
    public Response toResponse(Exception exception) {
        Map<String, Object> body = new HashMap<>();

        if (exception instanceof SocioException socioEx) {
            body.put("erro", socioEx.getMessage());
            body.put("status", socioEx.getStatusCode());
            return Response.status(socioEx.getStatusCode()).entity(body).build();
        }

        body.put("erro", "Erro interno inesperado");
        body.put("descricao", exception.getMessage());
        return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(body).build();
    }
}
