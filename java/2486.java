import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String line;
        while ((line = br.readLine()) != null && !line.isEmpty()) {
            int number = Integer.parseInt(line.trim());
            
            if (number == 0) {
                break;
            }
            
            int sum = 0;
            
            for (int i = 0; i < number; i++) {
                String[] parts = br.readLine().trim().split(" ");
                int quantidade = Integer.parseInt(parts[0]);
                String fruta = parts[1];
                
                switch (fruta) {
                    case "suco": sum += quantidade * 120; break;
                    case "morango": sum += quantidade * 85; break;
                    case "mamao": sum += quantidade * 85; break;
                    case "goiaba": sum += quantidade * 70; break;
                    case "manga": sum += quantidade * 56; break;
                    case "laranja": sum += quantidade * 50; break;
                    case "brocolis": sum += quantidade * 34; break;
                }
            }
            
            if (sum >= 110 && sum <= 130) {
                out.println(sum + " mg");
            } else if (sum > 130) {
                out.println("Menos " + (sum - 130) + " mg");
            } else {
                out.println("Mais " + (110 - sum) + " mg");
            }
        }
        
        out.close();
        br.close();
    }
}
