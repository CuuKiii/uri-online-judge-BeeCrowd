import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int repetitions = sc.nextInt();
        
        double fraction = 0.0;
        double SR2;
        
        for (int i = 0; i < repetitions; i++) {
            fraction = 1.0 / (2.0 + fraction);
        }
        
        SR2 = 1.0 + fraction;
        
        System.out.printf("%.10f%n", SR2);
        
        sc.close();
    }
}
