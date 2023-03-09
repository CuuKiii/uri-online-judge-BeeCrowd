import java.io.IOException;
import java.util.Scanner;

public class Main{

    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int T = leitor.nextInt();
        int R1, R2, R3;
        for (int i = 0; i < T; i++) {
        	R1 = leitor.nextInt();
        	R2 = leitor.nextInt();
        	R3 = R1 + R2;
        	System.out.println(R3);
        }
    }
	
}
