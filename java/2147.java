import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        int number = Integer.parseInt(br.readLine().trim());
        
        for (int i = 0; i < number; i++) {
            String word = br.readLine().trim();
            double cont = word.length() * 0.01;
            out.printf("%.2f%n", cont);
        }
        
        out.close();
        br.close();
    }
}
