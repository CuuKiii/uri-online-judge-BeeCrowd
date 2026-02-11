import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            double n1 = 0, n2 = 0;
            int count = 0;

            
            while (count < 2) {
                double nota = sc.nextDouble();
                if (nota >= 0.0 && nota <= 10.0) {
                    if (count == 0) {
                        n1 = nota;
                    } else {
                        n2 = nota;
                    }
                    count++;
                } else {
                    System.out.println("nota invalida");
                }
            }

            double media = (n1 + n2) / 2.0;
            System.out.printf("media = %.2f%n", media);

           
            int opcao;
            do {
                System.out.println("novo calculo (1-sim 2-nao)");
                opcao = sc.nextInt();
            } while (opcao != 1 && opcao != 2);

            if (opcao == 2) {
                break;
            }
        }

        sc.close();
    }
}
