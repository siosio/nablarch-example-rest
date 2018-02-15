package com.nablarch.example.error;

import nablarch.common.dao.NoDataException;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.message.ApplicationException;
import nablarch.core.message.Message;
import nablarch.fw.ExecutionContext;
import nablarch.fw.jaxrs.JaxRsErrorLogWriter;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;

import javax.persistence.OptimisticLockException;

/**
 * Example用のエラーログ出力クラス。
 *
 * @author Nabu Rakutaro
 */
public class ExampleErrorLogWriter extends JaxRsErrorLogWriter {
    
    private static final Logger LOGGER = LoggerManager.get(ExampleErrorLogWriter.class);

    @Override
    public void write(HttpRequest request, HttpResponse response, ExecutionContext context, Throwable throwable) {
        if (!(throwable instanceof NoDataException) && !(throwable instanceof OptimisticLockException)) {
            super.write(request, response, context, throwable);
        }

    }

    @Override
    protected void writeApplicationExceptionLog(final HttpRequest request, final HttpResponse response,
            final ExecutionContext context,
            final ApplicationException exception) {
        
        exception.getMessages()
                 .stream()
                 .map(Message::formatMessage)
                 .forEach(m -> LOGGER.logWarn(m));
    }
}
