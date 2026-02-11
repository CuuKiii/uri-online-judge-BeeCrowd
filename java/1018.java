import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int valor = sc.nextInt();
        System.out.println(valor);

        int trocoItalo;

        trocoItalo = valor / 100;
        System.out.println(trocoItalo + " nota(s) de R$ 100,00");
        valor = valor % 100;

        trocoItalo = valor / 50;
        System.out.println(trocoItalo + " nota(s) de R$ 50,00");
        valor = valor % 50;

        trocoItalo = valor / 20;
        System.out.println(trocoItalo + " nota(s) de R$ 20,00");
        valor = valor % 20;

        trocoItalo = valor / 10;
        System.out.println(trocoItalo + " nota(s) de R$ 10,00");
        valor = valor % 10;

        trocoItalo = valor / 5;
        System.out.println(trocoItalo + " nota(s) de R$ 5,00");
        valor = valor % 5;

        trocoItalo = valor / 2;
        System.out.println(trocoItalo + " nota(s) de R$ 2,00");
        valor = valor % 2;

        trocoItalo = valor / 1;
        System.out.println(trocoItalo + " nota(s) de R$ 1,00");
        valor = valor % 1;

        sc.close();
    }
}
