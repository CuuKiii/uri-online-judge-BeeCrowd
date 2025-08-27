import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String x = reader.readLine();
        String y = reader.readLine();

        int i;
        for(i = 0; i < x.length(); i++){
        }

        int k;
        for(k = 0; k < y.length(); k++){
        }

        if(i >= k){
            System.out.println("go");
        }else{
            System.out.println("no");
        }
    }
}
