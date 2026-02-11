import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int X = sc.nextInt();
        int Z = sc.nextInt();

        
        while (Z <= X) {
            Z = sc.nextInt();
        }

        int soma = X;
        int cont = 1;
        int temp = X;

        while (soma <= Z) {
            temp++;
            soma += temp;
            cont++;
        }

        System.out.println(cont);

        sc.close();
    }
}
