import org.apache.log4j.BasicConfigurator;
import spark.Request;
import spark.Spark;
import spark.Response;

import java.util.ArrayList;
import java.util.HashMap;


public class ServerExample {
    public static void main(String[] args){
        new ServerExample();
    /*-> {
            System.out.println("get");
            String key=request.params("id");
            System.out.println(map.get(key));
            return map.get(key)+"\n";
        });*/
    }
    public ServerExample(){
        BasicConfigurator.configure();
        configureServer();
        processRestfulAPIRequest();
    }

    private static void configureServer(){
        Spark.port(3000);
    }

    private void processRestfulAPIRequest(){
        Spark.get("/", this::echoRequest);
        Spark.get("/script/:searchTerm", this::scriptRequest);
        Spark.get("/scriptlines/:searchTerm", this::scriptlinesRequest);
    }

    private String scriptRequest(Request request, Response response){
        String searchTerm = request.params("searchTerm");
        System.out.println(request.url());
        response.type("application/json");
        response.header("Access-Control-Allow-Origin", "*");
        response.status(200); //ok
        return scriptToJson(request, searchTerm);
    }

    private String scriptlinesRequest(Request request, Response response){
        String searchTerm = request.params("searchTerm");
        System.out.println(request.url());
        response.type("application/json");
        response.header("Access-Control-Allow-Origin", "*");
        response.status(200); //ok
        return scriptlinesToJson(request, searchTerm);
    }

    private String echoRequest(Request request, Response response){
        response.type("application/json");
        response.header("Access-Control-Allow-Origin", "*");
        response.status(200); //ok
        return toJson(request);
    }

    private String scriptToJson(Request request, String searchTerm){
        int occurances=Read.Return_Occurances(searchTerm);
        String oc = Integer.toString(occurances);
        return "{\n"
                + "\"count\":\""+ oc + "\",\n"
                + "}";
    }

    private String scriptlinesToJson(Request request, String searchTerm){
        ArrayList<String> occurances=Read.Return_Lines(searchTerm);
        String return_string = "{\n";
        for(int i = 0; i < occurances.size(); i++) {
            return_string += ("\n" + occurances.get(i) + "\n");
        }
        return_string += "\n}\n";
        return return_string;
    }

    private String toJson(Request request){
        return"{\n"
                + "\"attributes\":\""+request.attributes() + "\",\n"
                + "\"body\":\"" + request.body() + "\",\n"
                + "\"contentLength\":\"" + request.contentLength() + "\",\n"
                + "\"contentPath\":\"" + request.contextPath() + "\",\n"
                + "\"cookies\":\"" + request.cookies() + "\",\n"
                + "\"headers\":\"" + request.headers() + "\",\n"
                + "\"host\":\"" + request.host() + "\",\n"
                + "\"ip\":\"" + request.ip() + "\",\n"
                + "\"params\":\"" + request.params() + "\",\n"
                + "\"pathInfo\":\"" + request.pathInfo() + "\",\n"
                + "\"serverPort\":\"" + request.port() + "\",\n"
                + "\"protocol\":\"" + request.protocol() + "\",\n"
                + "\"queryParams\":\"" + request.queryParams() + "\",\n"
                + "\"requestMethod\":\"" + request.requestMethod() + "\",\n"
                + "\"scheme\":\"" + request.scheme() + "\",\n"
                + "\"servletPath\":\"" + request.servletPath() + "\",\n"
                + "\"session\":\"" + request.session() + "\",\n"
                + "\"uri()\":\"" + request.uri() + "\",\n"
                + "\"url()\":\"" + request.url() + "\",\n"
                + "\"userAgent\":\"" + request.userAgent() + "\",\n"
                + "}";
    }
}
