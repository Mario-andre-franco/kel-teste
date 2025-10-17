package com.macf.kel.exception;

public class SocioException extends RuntimeException {
    private final int statusCode;

    public SocioException(String message, int statusCode) {
        super(message);
        this.statusCode = statusCode;
    }

    public int getStatusCode() {
        return statusCode;
    }
}
