import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int repetitions = scanner.nextInt();
        
        double SR10 = 3.0;
        double fraction = 0.0;
        
        for (int i = 0; i < repetitions; i++) {
            fraction = 1.0 / (6.0 + fraction);
        }
        
        SR10 += fraction;
        
        System.out.printf("%.10f%n", SR10);
        
        scanner.close();
    }
}
