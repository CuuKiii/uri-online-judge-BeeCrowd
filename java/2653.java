import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        List<String> treasure = new ArrayList<>();
        
        String jewel;
        while ((jewel = br.readLine()) != null) {
            jewel = jewel.trim();
            
            if (jewel.isEmpty()) {
                break;
            }
            
            if (!treasure.contains(jewel)) {
                treasure.add(jewel);
            }
        }
        
        out.println(treasure.size());
        out.close();
        br.close();
    }
}
