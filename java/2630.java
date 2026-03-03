import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class Main {
    
    static int eye(int R, int G, int B) {
        return (int) Math.floor(0.3 * R + 0.59 * G + 0.11 * B);
    }
    
    static int mean(int R, int G, int B) {
        return (int) Math.floor((R + G + B) / 3.0);
    }
    
    static int max(int R, int G, int B) {
        return (int) Math.floor(Math.max(R, Math.max(G, B)));
    }
    
    static int min(int R, int G, int B) {
        return (int) Math.floor(Math.min(R, Math.min(G, B)));
    }
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        int numCases = Integer.parseInt(br.readLine().trim());
        List<String> responses = new ArrayList<>();
        
        for (int i = 0; i < numCases; i++) {
            String methodName = br.readLine().trim();
            String[] rgbValues = br.readLine().trim().split(" ");
            
            int R = Integer.parseInt(rgbValues[0]);
            int G = Integer.parseInt(rgbValues[1]);
            int B = Integer.parseInt(rgbValues[2]);
            
            int level = 0;
            switch (methodName) {
                case "eye":
                    level = eye(R, G, B);
                    break;
                case "mean":
                    level = mean(R, G, B);
                    break;
                case "max":
                    level = max(R, G, B);
                    break;
                case "min":
                    level = min(R, G, B);
                    break;
            }
            
            responses.add("Caso #" + (i + 1) + ": " + level);
        }
        
        out.println(String.join("\n", responses));
        out.close();
        br.close();
    }
}
