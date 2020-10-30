package src;//import spark.Spark;
import org.apache.log4j.BasicConfigurator;
import spark.Request;
import spark.Spark;
import spark.Response;
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
        System.out.println("test");
        configureServer();
        System.out.println("did it");
        HashMap<String, String> map=new HashMap<>();
        map.put("Firstname", "John");
        map.put("Lastname", "Smith");
        processRestfulAPIRequest();
    }

    private static void configureServer(){
        Spark.port(3000);
    }

    private void processRestfulAPIRequest(){
        Spark.get("/", this::echoRequest);
        Spark.get("/script/:searchTerm", this::scriptRequest);
    }

    private String scriptRequest(Request request, Response response){
        String searchTerm = request.params("searchTerm");
        response.type("application/json");
        response.header("Access-Control-Allow-Origin", "*");
        response.status(200); //ok
        return scriptToJson(request, searchTerm);
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
                + "\"LOTR script\":\""+ oc + "\",\n"
                + "}";
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
