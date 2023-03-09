import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {
    	Scanner leitor = new Scanner(System.in);
    	int turistas = 0;
    	int jipes = 0;
    	while (true) {
    		String input = leitor.next();
    		if (input.equals("SALIDA")) {
    			jipes++;
    			turistas += leitor.nextInt();
    		}
    		else if (input.equals("VUELTA")) {
    			jipes--;
    			turistas -= leitor.nextInt();
    		} else {
    			break;
    		}
    	}
    	System.out.println(turistas);
    	System.out.println(jipes);
    }
    
}
