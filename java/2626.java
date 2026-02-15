import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
      
        Set<String> dodo = new HashSet<>(Arrays.asList(
            "papel pedra pedra",
            "pedra tesoura tesoura", 
            "tesoura papel papel"
        ));
        
        Set<String> leo = new HashSet<>(Arrays.asList(
            "pedra papel pedra",
            "tesoura pedra tesoura",
            "papel tesoura papel"
        ));
        
        Set<String> pepper = new HashSet<>(Arrays.asList(
            "pedra pedra papel",
            "tesoura tesoura pedra",
            "papel papel tesoura"
        ));
        
        String line;
        while ((line = br.readLine()) != null) {
            line = line.trim();
            if (line.isEmpty()) {
                break;
            }
            
            if (dodo.contains(line)) {
                out.println("Os atributos dos monstros vao ser inteligencia, sabedoria...");
            } else if (leo.contains(line)) {
                out.println("Iron Maiden's gonna get you, no matter how far!");
            } else if (pepper.contains(line)) {
                out.println("Urano perdeu algo muito precioso...");
            } else {
                out.println("Putz vei, o Leo ta demorando muito pra jogar...");
            }
        }
        
        out.close();
        br.close();
    }
}
