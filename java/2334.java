import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String line;
        while ((line = br.readLine()) != null && !line.isEmpty()) {
            BigInteger ducks = new BigInteger(line.trim());
            
            
            if (ducks.compareTo(BigInteger.ZERO) < 0) {
                break;
            }
            
            
            if (ducks.equals(BigInteger.ZERO)) {
                out.println("0");
                continue;
            }
            
           
            BigInteger result = ducks.subtract(BigInteger.ONE);
            
            out.println(result.toString());
        }
        
        out.close();
        br.close();
    }
}
