import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        char instrucao;
        int i, n, k, xf, yf, dist;

        n = scan.nextInt();
        k = scan.nextInt();
        xf = scan.nextInt();
        yf = scan.nextInt();
        k *= k;
        dist = (xf * xf) + (yf * yf);

        for(i = 0; i < n; ++i){
            if(dist == 0 || dist >= k)  break;

            instrucao = scan.next().charAt(0);

            switch(instrucao){
                case 'C':   dist -= 2 * yf - 1;
                            yf -= 1;
                            break;
                case 'B':   dist += 2 * yf + 1;
                            yf += 1;
                            break;
                case 'E':   dist += 2 * xf + 1;
                            xf += 1;
                            break;
                case 'D':   dist -= 2 * xf - 1;
                            xf -= 1;
                            break;
            }
        }

        if(dist == 0){
            System.out.println("Sucesso");
        }else{
            System.out.println("Trap " + Math.min(i + 1, n));
        }

    }
}
