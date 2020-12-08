import java.util.ArrayList;

public class WordRequest extends RequestData{
    private String word;
    private ArrayList<String> lines;
    private Boolean valid;

    public Boolean Do(){
        valid=false;
        try{lines=Read.Return_Lines(word);}
        catch(Exception e){
            valid=false;
        }
        valid=true;
        return valid;
    }

    @Override
    public void buildResponse() {
        this.Do();
    }
}
