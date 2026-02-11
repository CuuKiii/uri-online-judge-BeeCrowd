import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] linha1 = sc.nextLine().split(" ");
        String[] linha2 = sc.nextLine().split(" ");

        double x1 = Double.parseDouble(linha1[0]);
        double y1 = Double.parseDouble(linha1[1]);
        double x2 = Double.parseDouble(linha2[0]);
        double y2 = Double.parseDouble(linha2[1]);

        double italos = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        System.out.printf("%.4f%n", italos);

        sc.close();
    }
}
