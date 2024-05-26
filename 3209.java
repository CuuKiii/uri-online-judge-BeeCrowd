import java.util.Scanner;

public class Main{
    public static void main(String [] args)
    {
        Scanner scanner = new Scanner(System.in);
        int test = scanner.nextInt();
        scanner.nextLine();

        for (int i = 0; i < test; i++) {
            String[] tomadas = scanner.nextLine().split(" ");
            int lines = Integer.parseInt(tomadas[0]), soma = 0;

            for (int j = 1; j < tomadas.length; j++) {
               soma += Integer.parseInt(tomadas[j]);
            }
            soma = soma - (lines - 1);

            System.out.println(soma);
        }
        
        scanner.close();
    }
}
