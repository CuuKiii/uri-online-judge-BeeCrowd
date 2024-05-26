import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] line = sc.nextLine().trim().split(" ");
        double a = Double.parseDouble(line[0]);
        double b = Double.parseDouble(line[1]);

        double flutuacao = (((1.0 + a / 100.00) * (1.0 + b / 100.00)) - 1.0) * 100.0;

        System.out.println(String.format("%.6f", flutuacao));
    }
}
