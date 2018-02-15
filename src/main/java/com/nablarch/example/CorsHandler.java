package com.nablarch.example;

import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpRequestHandler;
import nablarch.fw.web.HttpResponse;

public class CorsHandler implements HttpRequestHandler {

    @Override
    public HttpResponse handle(final HttpRequest request, final ExecutionContext context) {
        if (request.getMethod()
                   .equalsIgnoreCase("options")) {
            final HttpResponse response = new HttpResponse();
            response.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Access-Control-Allow-Headers", "Content-Type");
            return response;
        }
        final HttpResponse response = context.handleNext(request);
        response.setHeader("Access-Control-Allow-Origin", "*");
        return response;
    }
}
