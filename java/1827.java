import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        
        while (scanner.hasNext()) {
            String input = scanner.nextLine();
            int size;
            
            try {
                size = Integer.parseInt(input);
            } catch (NumberFormatException e) {
                break;
            }
            
            for (int i = 0; i < size; i++) {
                StringBuilder line = new StringBuilder();
                
                for (int n = 0; n < size; n++) {
                    int aux = 0;
                    
                    if (i == n) {
                        aux = 2;
                    }
                    if (i + n + 1 == size) {
                        aux = 3;
                    }
                    if (i >= size / 3 &&
                        n >= size / 3 &&
                        i < size - size / 3 &&
                        n < size - size / 3) {
                        aux = 1;
                    }
                    if (i == size / 2 &&
                        n == size / 2 &&
                        size % 2 == 1) {
                        aux = 4;
                    }
                    
                    line.append(aux);
                }
                
                System.out.println(line.toString());
            }
            
            System.out.println();
        }
        
        scanner.close();
    }
}
