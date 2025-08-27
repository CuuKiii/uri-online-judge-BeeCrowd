import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while(sc.hasNext()) {
            int N = sc.nextInt();
            int L = sc.nextInt();
            int C = sc.nextInt();
            sc.nextLine();
            String conto = sc.nextLine();
            int totalLinhas = 0;
            int quantosCaracteres = 0;
            String[] palavras = conto.split(" ");
            for (String palavra: palavras) {
                int comprimentoPalavra = palavra.length();
                if (quantosCaracteres + comprimentoPalavra > C) {
                    totalLinhas++;
                    quantosCaracteres = comprimentoPalavra;
                } else {
                    quantosCaracteres += comprimentoPalavra;
                }
                quantosCaracteres++;
            }
            if (quantosCaracteres > 0)
                totalLinhas++;
            int quantos = (totalLinhas + L - 1) / L;
            System.out.println(quantos);
        }
        sc.close();
    }
}
