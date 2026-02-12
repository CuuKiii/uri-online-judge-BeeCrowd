import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        
        for (int cases = 1; scanner.hasNext(); cases++) {
            String input = scanner.nextLine();
            int number;
            
            try {
                number = Integer.parseInt(input);
            } catch (NumberFormatException e) {
                break;
            }
            
            List<Integer> sequence = new ArrayList<>();
            sequence.add(0);
            
            for (int i = 1; i <= number; i++) {
                for (int n = 0; n < i; n++) {
                    sequence.add(i);
                }
            }
            
            if (sequence.size() == 1) {
                System.out.println("Caso " + cases + ": " + sequence.size() + " numero");
            } else {
                System.out.println("Caso " + cases + ": " + sequence.size() + " numeros");
            }
            
           
            for (int j = 0; j < sequence.size(); j++) {
                if (j > 0) {
                    System.out.print(" ");
                }
                System.out.print(sequence.get(j));
            }
            System.out.println();
            System.out.println();
        }
        
        scanner.close();
    }
}
