import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String line;
        while ((line = br.readLine()) != null && !line.isEmpty()) {
           
            String[] firstLine = line.trim().split(" ");
            if (firstLine.length < 2) {
                break;
            }
            
            try {
                Integer.parseInt(firstLine[0]);
            } catch (NumberFormatException e) {
                break;
            }
            
            int size = Integer.parseInt(firstLine[0]);
            int cases = Integer.parseInt(firstLine[1]);
            
            String C1 = br.readLine();
            String C2 = br.readLine();
            
            Map<Character, Character> table = new HashMap<>();
            
            
            for (int i = 0; i < size; i++) {
                char c1 = C1.charAt(i);
                char c2 = C2.charAt(i);
                
                table.put(c1, c2);
                table.put(Character.toLowerCase(c1), Character.toLowerCase(c2));
                table.put(c2, c1);
                table.put(Character.toLowerCase(c2), Character.toLowerCase(c1));
            }
            
            for (int i = 0; i < cases; i++) {
                String cipher = br.readLine();
                StringBuilder result = new StringBuilder();
                
                for (int j = 0; j < cipher.length(); j++) {
                    char currentChar = cipher.charAt(j);
                    if (table.containsKey(currentChar)) {
                        result.append(table.get(currentChar));
                    } else {
                        result.append(currentChar);
                    }
                }
                
                out.println(result.toString());
            }
            
            out.println(); 
        }
        
        out.close();
        br.close();
    }
}
