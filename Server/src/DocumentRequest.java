import java.util.ArrayList;

public class DocumentRequest extends RequestData{
    private String word;
    private ArrayList<String> lines;
    private Boolean valid;
    private String document;

    public Boolean Do(){
        valid=false;
        try{
            lines=Read.Return_Lines(word, document);
            valid=true;
        }
        catch(Exception e){

        }
        return valid;
    }


    @Override
    public void buildResponse() {
        this.Do();
    }
}
