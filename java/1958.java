import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        
        String Nstring = scanner.nextLine();
        double Nfull = Double.parseDouble(Nstring);
        
       
        String N = String.format("%.4e", Nfull);
        
       
        N = N.replace("e", "E");
        
        
        if (Nfull >= 0) {
            N = "+" + N;
        }
        
       
        int ePos = N.indexOf('E');
        String exp = N.substring(ePos + 1);
        int expValue = Integer.parseInt(exp);
        
        
        if (expValue >= 0) {
            N = N.substring(0, ePos + 1) + "+" + String.format("%02d", expValue);
        } else {
            N = N.substring(0, ePos + 1) + String.format("%03d", expValue);
        }
        
        
        if (Nstring.equals("-0")) {
            System.out.println("-0.0000E+00");
        } else {
            System.out.println(N);
        }
        
        scanner.close();
    }
}
