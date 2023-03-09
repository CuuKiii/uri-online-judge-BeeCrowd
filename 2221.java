import java.io.IOException;
import java.util.Scanner;

public class Main {
	
    public static void main(String[] args) throws IOException {
    	Scanner leitor = new Scanner(System.in);
    	int T = leitor.nextInt();
    	int B, A1, D1, L1, A2, D2, L2, V1, V2;
    	for (int i = 0; i < T; i++) {
    		B = leitor.nextInt();
    		A1 = leitor.nextInt();
    		D1 = leitor.nextInt();
    		L1 = leitor.nextInt();
    		A2 = leitor.nextInt();
    		D2 = leitor.nextInt();
    		L2 = leitor.nextInt();
    		V1 = ((A1 + D1) / 2) + (L1 % 2 == 0 ? B : 0);
    		V2 = ((A2 + D2) / 2) + (L2 % 2 == 0 ? B : 0);
    		if (V1 > V2) System.out.println("Dabriel");
    		else if (V2 > V1) System.out.println("Guarte");
    		else System.out.println("Empate");
    	}
    }
	
}
