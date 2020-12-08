

import org.apache.log4j.BasicConfigurator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.google.gson.Gson;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static spark.Spark.*;
import static spark.Spark.redirect;


public class RestfulAPI {
    private final Logger log = LoggerFactory.getLogger(RestfulAPI.class);
    private DateTimeFormatter dateTimeFormat = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");

    private final int HTTP_OK = 200;
    private final int HTTP_BAD_REQUEST = 400;
    private final int HTTP_SERVER_ERROR = 500;

    public static void main(String[] args) {
        new RestfulAPI();
    }

    public RestfulAPI() {
        configureServer();
        BasicConfigurator.configure();
        processRestfulAPIRequest();
    }

    private void processRestfulAPIRequest() {
        path("/api", () -> {
            before("/*", (req, res) -> logRequest(req));
            //post("/move", (req, res) -> processHttpRequest(req, res, Move.class));
            post("/word", (req, res) -> processHttpRequest(req, res, WordRequest.class));
        });
    }

    private String processHttpRequest(spark.Request httpRequest, spark.Response httpResponse, Type type) {
        setupResponse(httpResponse);
        String jsonString = httpRequest.body();
        try {
            return buildJSONResponse(new Gson().fromJson(jsonString, type));
        } catch (RequestException e) {
            log.info("Bad Request - {}", e.getMessage());
            httpResponse.status(HTTP_BAD_REQUEST);
        } catch (Exception e) {
            log.info("Server Error - ", e);
            httpResponse.status(HTTP_SERVER_ERROR);
        }
        return jsonString;
    }

    private void setupResponse(spark.Response response) {
        response.type("application/json");
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        response.status(200);
    }

    private String buildJSONResponse(RequestData request) throws RequestException {
        request.buildResponse();
        String responseBody = new Gson().toJson(request);
        log.trace("Response - {}", responseBody);
        return responseBody;
    }

    private void configureServer() {
        port(8080);
        String keystoreFile = System.getenv("KEYSTORE_FILE");
        String keystorePassword = System.getenv("KEYSTORE_PASSWORD");
        if (keystoreFile != null && keystorePassword != null) {
            secure(keystoreFile, keystorePassword, null, null);
        } else {
        }
        staticFiles.location("/public/");
        redirect.get("/", "/index.html");
    }

    private void logRequest(spark.Request request) {
        String message = "Request - "
                + "[" + dateTimeFormat.format(LocalDateTime.now()) + "] "
                + request.ip() + " "
                + "\"" + request.requestMethod() + " "
                + request.pathInfo() + " "
                + request.protocol() + "\" ";
        log.info(message);
    }
}