import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int m;
        StringBuilder sb;
        while (N != 0){
            for (int i = 1; i <= N; i++){
                m = i;
                sb = new StringBuilder();
                for (int j = 1; j <= N; j++){
                    if (i == j) m = 1;
                    sb.append(String.format("%3d", m));
                    if (j < N) sb.append(" ");
                    else sb.append("\n");

                    if (j >= i) m++;
                    else m--;
                }
                System.out.print(sb.toString());
            }
            System.out.printf("\n");
            N = sc.nextInt();
        }
        sc.close();
    }
}
