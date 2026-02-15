import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    
    
    static boolean soma(int[] expressao) {
        return expressao[0] + expressao[1] == expressao[2];
    }
    
    static boolean subtracao(int[] expressao) {
        return expressao[0] - expressao[1] == expressao[2];
    }
    
    static boolean multiplicacao(int[] expressao) {
        return expressao[0] * expressao[1] == expressao[2];
    }
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String line;
        List<String> allLines = new ArrayList<>();
        
       
        while ((line = br.readLine()) != null) {
            String trimmed = line.trim();
            if (!trimmed.isEmpty()) {
                allLines.add(trimmed);
            }
        }
        
        int index = 0;
        
        while (index < allLines.size()) {
            int T = Integer.parseInt(allLines.get(index++).trim());
            
            
            List<int[]> expressoes = new ArrayList<>();
            for (int i = 0; i < T; i++) {
                String[] parts = allLines.get(index++).trim().split(" ");
                int X = Integer.parseInt(parts[0]);
                
                String[] yzParts = parts[1].split("=");
                int Y = Integer.parseInt(yzParts[0]);
                int Z = Integer.parseInt(yzParts[1]);
                
                expressoes.add(new int[]{X, Y, Z});
            }
            
     
            List<String> errados = new ArrayList<>();
            for (int i = 0; i < T; i++) {
                String[] aposta = allLines.get(index++).trim().split(" ");
                String nome = aposta[0];
                int E = Integer.parseInt(aposta[1]) - 1; 
                String operador = aposta[2];
                
                int[] expressao = expressoes.get(E);
                
                switch (operador) {
                    case "+":
                        if (!soma(expressao)) {
                            errados.add(nome);
                        }
                        break;
                    case "-":
                        if (!subtracao(expressao)) {
                            errados.add(nome);
                        }
                        break;
                    case "*":
                        if (!multiplicacao(expressao)) {
                            errados.add(nome);
                        }
                        break;
                    case "I":
                        if (soma(expressao) || subtracao(expressao) || multiplicacao(expressao)) {
                            errados.add(nome);
                        }
                        break;
                }
            }
            
         
            if (errados.isEmpty()) {
                out.println("You Shall All Pass!");
            } else if (errados.size() == T) {
                out.println("None Shall Pass!");
            } else {
                Collections.sort(errados);
                out.println(String.join(" ", errados));
            }
        }
        
        out.close();
        br.close();
    }
}
