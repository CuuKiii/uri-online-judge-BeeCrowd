import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();

        verificarOrdem(sc, a, b);

        sc.close();
    }

    public static void verificarOrdem(Scanner sc, int a, int b) {
        if (a != b) {
            if (a > b) {
                System.out.println("Decrescente");
            } else {
                System.out.println("Crescente");
            }
            int novoA = sc.nextInt();
            int novoB = sc.nextInt();
            verificarOrdem(sc, novoA, novoB);
        }
    }
}
