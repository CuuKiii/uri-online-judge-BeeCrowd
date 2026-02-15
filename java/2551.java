import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String line;
        
        while ((line = br.readLine()) != null) {
            line = line.trim();
            if (line.isEmpty()) continue;
            
            int number = Integer.parseInt(line);
            double record = 0.0;
            
            for (int i = 1; i <= number; i++) {
                String[] values = br.readLine().trim().split(" ");
                int a = Integer.parseInt(values[0]);
                int b = Integer.parseInt(values[1]);
                
                double razao = (double) b / a;
                
                if (i == 1) {
                    out.println(i);
                    record = razao;
                } else if (razao > record) {
                    out.println(i);
                    record = razao;
                }
            }
        }
        
        out.close();
        br.close();
    }
}
