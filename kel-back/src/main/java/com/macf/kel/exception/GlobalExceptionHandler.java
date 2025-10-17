package com.macf.kel.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(SocioException.class)
    public ResponseEntity<?> handleSocioException(SocioException e) {
        return ResponseEntity
                .status(e.getStatusCode())
                .body(Map.of(
                        "erro", e.getMessage(),
                        "status", e.getStatusCode()
                ));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleException(Exception e) {
        return ResponseEntity
                .internalServerError()
                .body(Map.of(
                        "erro", "Erro interno inesperado",
                        "descricao", e.getMessage()
                ));
    }
}
