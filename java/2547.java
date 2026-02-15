import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String line;
        
        
        line = br.readLine();
        if (line == null) return;
        
        String[] firstLine = line.trim().split(" ");
        int a = Integer.parseInt(firstLine[0]);
        int b = Integer.parseInt(firstLine[1]);
        int c = Integer.parseInt(firstLine[2]);
        
        int cont = 0;
        
        while (true) {
            
            for (int i = 0; i < a; i++) {
                int number = Integer.parseInt(br.readLine().trim());
                
                if (number >= b && number <= c) {
                    cont++;
                }
            }
            
            out.println(cont);
            
            
            line = br.readLine();
            if (line == null || line.trim().isEmpty()) {
                break;
            }
            
            String[] nextLine = line.trim().split(" ");
            a = Integer.parseInt(nextLine[0]);
            b = Integer.parseInt(nextLine[1]);
            c = Integer.parseInt(nextLine[2]);
            cont = 0;
        }
        
        out.close();
        br.close();
    }
}
