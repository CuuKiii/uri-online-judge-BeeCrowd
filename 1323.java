import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> lista = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        int vezes = 0;
        while (true) {
            int a = 0;
            int n = scanner.nextInt();
            if (n == 0) {
                break;
            }
            for (int i = 1; i <= n; i++) {
                a += i * i;
            }
            lista.add(a);
            vezes++;
        }
        for (int k = 0; k < vezes; k++) {
            System.out.println(lista.get(k));
        }
    }
}
