import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int number = sc.nextInt();
        sc.nextLine(); 
        
        int SumS = 0, SumB = 0, SumA = 0;
        int SumS1 = 0, SumB1 = 0, SumA1 = 0;
        
        for (int i = 0; i < number; i++) {
            String name = sc.nextLine(); 
            
            String[] tentativas = sc.nextLine().split(" ");
            String[] sucessos = sc.nextLine().split(" ");
            
            SumS += Integer.parseInt(tentativas[0]);
            SumB += Integer.parseInt(tentativas[1]);
            SumA += Integer.parseInt(tentativas[2]);
            
            SumS1 += Integer.parseInt(sucessos[0]);
            SumB1 += Integer.parseInt(sucessos[1]);
            SumA1 += Integer.parseInt(sucessos[2]);
        }
        
        double saque = (SumS1 * 100.0) / SumS;
        double bloqueio = (SumB1 * 100.0) / SumB;
        double ataque = (SumA1 * 100.0) / SumA;
        
        System.out.printf("Pontos de Saque: %.2f %%.\n", saque);
        System.out.printf("Pontos de Bloqueio: %.2f %%.\n", bloqueio);
        System.out.printf("Pontos de Ataque: %.2f %%.\n", ataque);
        
        sc.close();
    }
}
