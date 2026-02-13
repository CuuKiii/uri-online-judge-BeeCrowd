import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String[] firstLine = br.readLine().trim().split(" ");
        int A = Integer.parseInt(firstLine[0]);
        
        String[] velocityStr = br.readLine().trim().split(" ");
        
        int temp = 0;
        int verify = 0;
        
        for (int i = 0; i < A && i < velocityStr.length; i++) {
            int current = Integer.parseInt(velocityStr[i]);
            
            if (i == 0) {
                temp = current;
            } else {
                if (temp <= current) {
                    temp = current;
                } else {
                    out.println(i + 1);
                    verify++;
                    break;
                }
            }
        }
        
        if (verify == 0) {
            out.println(0);
        }
        
        out.close();
        br.close();
    }
}
