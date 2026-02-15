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
        
        int cont = 0;
        
        while (true) {
            
            for (int i = 0; i < a; i++) {
                String[] playerInfo = br.readLine().trim().split(" ");
                int id = Integer.parseInt(playerInfo[0]);
                int presente = Integer.parseInt(playerInfo[1]);
                
                if (id == b && presente == 0) {
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
            cont = 0;
        }
        
        out.close();
        br.close();
    }
}
