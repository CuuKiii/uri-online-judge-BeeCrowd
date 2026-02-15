import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String line;
        int cont = 0;
        
        line = br.readLine();
        if (line == null) return;
        
        int number = Integer.parseInt(line.trim());
        String[] votesStr = br.readLine().trim().split(" ");
        
        while (true) {
           
            for (int i = 0; i < votesStr.length && i < number; i++) {
                if (Integer.parseInt(votesStr[i]) == 1) {
                    cont++;
                }
            }
            
            if (cont >= (votesStr.length * 2.0 / 3.0)) {
                out.println("impeachment");
            } else {
                out.println("acusacao arquivada");
            }
            
        
            line = br.readLine();
            if (line == null || line.trim().isEmpty()) {
                break;
            }
            
            cont = 0;
            number = Integer.parseInt(line.trim());
            votesStr = br.readLine().trim().split(" ");
        }
        
        out.close();
        br.close();
    }
}
