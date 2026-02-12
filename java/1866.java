import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        
        int number = Integer.parseInt(scanner.nextLine());
        int N = Integer.parseInt(scanner.nextLine());
        boolean bool = false;
        int i = 0;
        int S = 0;
        
        while (i < number) {
            for (int j = 1; j <= N; j++) {
                if (bool) {
                    bool = false;
                    S--;
                } else {
                    S++;
                    bool = true;
                }
            }
            bool = false;
            System.out.println(S);
            
            S = 0;
            if (scanner.hasNext()) {
                N = Integer.parseInt(scanner.nextLine());
            }
            i++;
        }
        
        scanner.close();
    }
}
