import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String[] numbersStr = br.readLine().trim().split(" ");
        double[] numbers = new double[3];
        
        for (int i = 0; i < 3; i++) {
            numbers[i] = Double.parseDouble(numbersStr[i]);
        }
        
      
        Arrays.sort(numbers);
        double A = numbers[2];
        double B = numbers[1];
        double C = numbers[0];
        
       
        if (A >= B + C) {
            out.println("Invalido");
            out.close();
            br.close();
            return;
        }
        
        if (A == B && B == C) {
            out.println("Valido-Equilatero");
        } else if (A == B || A == C || B == C) {
            out.println("Valido-Isoceles");
        } else {
            out.println("Valido-Escaleno");
        }
        
        
        if (Math.pow(A, 2) == (Math.pow(B, 2) + Math.pow(C, 2))) {
            out.println("Retangulo: S");
        } else {
            out.println("Retangulo: N");
        }
        
        out.close();
        br.close();
    }
}
