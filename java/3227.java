import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int[] qtd = new int[2];
        String entrada;
        int X, abs, resposta;

        Scanner scanner = new Scanner(System.in);
        X = scanner.nextInt();
        entrada = scanner.next();

        qtd[0] = 0;
        qtd[1] = 0;
        abs = 0;
        resposta = 0;

        while(entrada.length() > 0){
            int genero = entrada.charAt(0) == 'W' ? 1 : 0;

            if(qtd[genero] < qtd[1 - genero] || abs < X){
                if(qtd[genero] < qtd[1 - genero]){
                    abs--;
                }else{
                    abs++;
                }

                resposta++;
                qtd[genero]++;
                entrada = entrada.substring(1);
                continue;
            }

            if(entrada.length() > 1){
                genero = entrada.charAt(1) == 'W' ? 1 : 0;

                if(qtd[genero] < qtd[1 - genero] || abs < X){
                    if(qtd[genero] < qtd[1 - genero]){
                        abs--;
                    }else{
                        abs++;
                    }

                    resposta++;
                    qtd[genero]++;
                    entrada = entrada.substring(0, 1) + entrada.substring(2);
                    continue;
                }else{
                    break;
                }
            }
        }

        System.out.println(resposta);
    }
}
