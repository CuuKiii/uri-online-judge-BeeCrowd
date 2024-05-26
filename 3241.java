import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = scanner.nextInt();
        scanner.nextLine(); // consume next line character
        int x = 0, y = 0;

        while(count > 0) {
            String soma = scanner.nextLine();
            if (!soma.equals("P=NP")) {
                String[] numbers = soma.split("\\+");
                x = Integer.parseInt(numbers[0].trim());
                y = Integer.parseInt(numbers[1].trim());

                soma = Integer.toString(x + y);
                System.out.println(soma);
            } else {
                System.out.println("skipped");
            }
            soma = null;
            count--;
        }
        scanner.close();
    }
}
