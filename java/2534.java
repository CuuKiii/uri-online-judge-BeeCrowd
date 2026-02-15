import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        List<Integer> array = new ArrayList<>();
        String line;
        
       
        line = br.readLine();
        if (line == null) return;
        
        String[] firstLine = line.trim().split(" ");
        int a = Integer.parseInt(firstLine[0]);
        int b = Integer.parseInt(firstLine[1]);
        
        while (true) {
            
            for (int i = 0; i < a; i++) {
                int avaliation = Integer.parseInt(br.readLine().trim());
                array.add(avaliation);
            }
            
            
            Collections.sort(array, Collections.reverseOrder());
            
            
            for (int i = 0; i < b; i++) {
                int position = Integer.parseInt(br.readLine().trim());
                out.println(array.get(position - 1)); 
            }
            
           
            line = br.readLine();
            if (line == null || line.trim().isEmpty()) {
                break;
            }
            
            String[] nextLine = line.trim().split(" ");
            a = Integer.parseInt(nextLine[0]);
            b = Integer.parseInt(nextLine[1]);
            array.clear();
        }
        
        out.close();
        br.close();
    }
}
