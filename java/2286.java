import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        int j = 1;

        while(n != 0){
            String nomePar = scanner.nextLine();
            String nomeImp = scanner.nextLine();
            
            int soma = 0;
            for (int i = 0; i < n; i++){
                String inputs[] = scanner.nextLine().split(" ");
                int par = Integer.parseInt(inputs[0]);
                int impa = Integer.parseInt(inputs[1]);

                soma = par + impa;

                if(i == 0){
                    System.out.println("Teste " + j);

                }

                if(soma % 2 == 0){
                    System.out.println(nomePar);

                } else {
                    System.out.println(nomeImp);

                }
            }
            System.out.println("");

            j = j + 1;
            n = Integer.parseInt(scanner.nextLine());
        }
        scanner.close();
    }
}
