import java.io.*;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while (true) {
            String inpt = br.readLine();
            if (inpt == null || inpt.isEmpty()) {
                break;
            }

            String[] parts = inpt.split(" ");
            BigInteger a = new BigInteger(parts[0]);
            BigInteger b = new BigInteger(parts[1]);

            BigInteger result = a.xor(b);

            System.out.println(result);
        }
    }
}
