import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        
        double term1 = Math.pow((1 + Math.sqrt(5)) / 2, N);
        double term2 = Math.pow((1 - Math.sqrt(5)) / 2, N);
        double fib = (term1 - term2) / Math.sqrt(5);
        
        System.out.printf("%.1f%n", fib);
        
        sc.close();
    }
}
