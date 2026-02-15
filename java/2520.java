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
            
            
            if (!Character.isDigit(line.charAt(0))) {
                break;
            }
            
            String[] dimensions = line.split(" ");
            int row = Integer.parseInt(dimensions[0]);
            int column = Integer.parseInt(dimensions[1]);
            
            int x1 = -1, y1 = -1, x2 = -1, y2 = -1;
            
            for (int r = 0; r < row; r++) {
                String[] values = br.readLine().trim().split(" ");
                
                for (int c = 0; c < column; c++) {
                    int value = Integer.parseInt(values[c]);
                    
                    if (value == 1) {
                        x1 = c;
                        y1 = r;
                    } else if (value == 2) {
                        x2 = c;
                        y2 = r;
                    }
                }
            }
            
            int path = Math.abs(x2 - x1) + Math.abs(y2 - y1);
            out.println(path);
        }
        
        out.close();
        br.close();
    }
}
