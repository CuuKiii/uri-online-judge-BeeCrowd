import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int N = scanner.nextInt();
        
        double P = N / Math.log(N);
        double M = (1.25506 * N) / Math.log(N);
        
        System.out.printf("%.1f %.1f%n", P, M);
        
        scanner.close();
    }
}
