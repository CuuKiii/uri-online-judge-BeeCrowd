import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        validarSenha(sc, x);
        sc.close();
    }

    public static void validarSenha(Scanner sc, int x) {
        if (x == 2002) {
            System.out.println("Acesso Permitido");
        } else {
            System.out.println("Senha Invalida");
            int novaSenha = sc.nextInt();
            validarSenha(sc, novaSenha);
        }
    }
}
