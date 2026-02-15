import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String line;
        while ((line = br.readLine()) != null) {
            line = line.trim();
            if (line.isEmpty()) continue;
            
           
            if (!Character.isDigit(line.charAt(0))) {
                break;
            }
            
            String[] dimensions = line.split(" ");
            int row = Integer.parseInt(dimensions[0]);
            int column = Integer.parseInt(dimensions[1]);
            
           
            int[][] board = new int[row + 2][column + 2];
            
         
            for (int r = 1; r <= row; r++) {
                String[] values = br.readLine().trim().split(" ");
                for (int c = 1; c <= column; c++) {
                    board[r][c] = Integer.parseInt(values[c - 1]);
                }
            }
            
           
            for (int r = 1; r <= row; r++) {
                StringBuilder lineOutput = new StringBuilder();
                
                for (int c = 1; c <= column; c++) {
                    if (board[r][c] == 1) {
                        lineOutput.append(9);
                    } else {
                        int adjacent = 0;
                        if (board[r - 1][c] == 1) adjacent++;
                        if (board[r + 1][c] == 1) adjacent++;
                        if (board[r][c - 1] == 1) adjacent++;
                        if (board[r][c + 1] == 1) adjacent++;
                        lineOutput.append(adjacent);
                    }
                }
                
                out.println(lineOutput.toString());
            }
        }
        
        out.close();
        br.close();
    }
}
