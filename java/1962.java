import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        
        int number = Integer.parseInt(scanner.nextLine());
        int i = 0;
        int year = Integer.parseInt(scanner.nextLine());
        
        while (i < number) {
            if (year >= 2015) {
                System.out.println((year - 2014) + " A.C.");
            } else if (year < 2015) {
                System.out.println((2015 - year) + " D.C.");
            }
            
            if (scanner.hasNext()) {
                year = Integer.parseInt(scanner.nextLine());
            }
            i++;
        }
        
        scanner.close();
    }
}
