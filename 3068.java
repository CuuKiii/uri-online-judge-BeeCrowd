import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int n, x1, y1, x2, y2, m1, m2, testes = 1, meteoritos;
        Scanner scanner = new Scanner(System.in);

        while(true){
            x1 = scanner.nextInt();
            y1 = scanner.nextInt();
            x2 = scanner.nextInt();
            y2 = scanner.nextInt();
            // Se todos forem zero
            if(x1 == 0 && x2 == 0 && y1 == 0 && y2 == 0)
                break;

            // Reseta o número de meteoritos que atingiram a fazenda.
            meteoritos = 0;
            n = scanner.nextInt();
            while(n > 0){
                m1 = scanner.nextInt();
                m2 = scanner.nextInt(); //(m1, m2) - Coordenada do meteorito
                // Se estiver dentro dos limites da fazenda.
                if(m1 >= x1 && m1 <= x2 && m2 <= y1 && m2 >= y2)
                    meteoritos++;
                n--;
            }
            System.out.println("Teste " + testes);
            System.out.println(meteoritos);

            testes++;
        }
    }
}
