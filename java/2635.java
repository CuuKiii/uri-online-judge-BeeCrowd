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
        
        
        int searchedSize = Integer.parseInt(br.readLine().trim());
        List<String> searched = new ArrayList<>();
        
        for (int i = 0; i < searchedSize; i++) {
            searched.add(br.readLine().trim());
        }
        
        
        int querySize = Integer.parseInt(br.readLine().trim());
        
        for (int i = 0; i < querySize; i++) {
            String query = br.readLine().trim();
            int suggestions = 0;
            int suggestionSize = 0;
            
            
            for (String word : searched) {
                if (word.startsWith(query)) {
                    suggestions++;
                    suggestionSize = Math.max(suggestionSize, word.length());
                }
            }
            
            if (suggestions == 0) {
                out.println(-1);
            } else {
                out.println(suggestions + " " + suggestionSize);
            }
        }
        
        out.close();
        br.close();
    }
}
