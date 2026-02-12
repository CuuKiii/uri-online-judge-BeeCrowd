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
        
        List<Integer> values = new ArrayList<>();
        String line;
        
        while ((line = br.readLine()) != null && !line.isEmpty()) {
            String[] tokens = line.trim().split("\\s+");
            for (String token : tokens) {
                if (!token.isEmpty()) {
                    values.add(Integer.parseInt(token));
                }
            }
        }
        
        int index = 0;
        int N = values.get(index++);
        int M = values.get(index++);
        
        int[][] terrain = new int[N][M];
        
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                terrain[i][j] = values.get(index++);
            }
        }
        
        int linePos = 0;
        int columnPos = 0;
        
        for (int i = 1; i < N - 1; i++) {
            for (int j = 1; j < M - 1; j++) {
                if (terrain[i][j] == 42) {
                    if (terrain[i - 1][j - 1] == 7 && 
                        terrain[i - 1][j] == 7 && 
                        terrain[i - 1][j + 1] == 7 &&
                        terrain[i][j - 1] == 7 && 
                        terrain[i][j + 1] == 7 &&
                        terrain[i + 1][j - 1] == 7 && 
                        terrain[i + 1][j] == 7 && 
                        terrain[i + 1][j + 1] == 7) {
                        
                        linePos = i + 1;
                        columnPos = j + 1;
                        out.println(linePos + " " + columnPos);
                        out.close();
                        br.close();
                        return;
                    }
                }
            }
        }
        
        out.println("0 0");
        out.close();
        br.close();
    }
}
