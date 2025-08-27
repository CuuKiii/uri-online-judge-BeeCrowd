import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        while (true) {
            int n = scan.nextInt();
            scan.nextLine();  // Consume newline character
            if (n == 0) {
                break;
            }
            int[] a = Arrays.stream(scan.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            int soma = 10;
            if (n != 1) {
                for (int i = 0; i < n - 1; i++) {
                    if (a[i + 1] - a[i] > 10) {
                        soma += 10;
                    } else {
                        soma += a[i + 1] - a[i];
                    }
                }
            }
            System.out.println(soma);
        }
        scan.close();
    }
}
