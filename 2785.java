import java.util.Arrays;
import java.util.Scanner;

public class Main {
    static final int MAX = 1123;
    static int N;
    static int[][] a = new int[2][MAX], t = new int[2][MAX];
    static int[] e = new int[2], x = new int[2], pd = new int[2][MAX];

    int solve(int i, int j) {
        if (pd[i][j] != -1) 
            return pd[i][j];
        if (j == N) 
            return pd[i][j] = a[i][j] + x[i];
        if (j == 0) 
            return pd[i][j] = e[i] + solve(i, j + 1);

        return pd[i][j] = a[i][j] + Math.min(solve(i, j + 1), t[i][j] + solve(i == 0 ? 1 : 0, j + 1));
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextInt()) {
            N = scanner.nextInt();
            e[0] = scanner.nextInt();
            e[1] = scanner.nextInt();
            for (int i = 0; i < 2; i++)
                for (int j = 1; j <= N; j++)
                    a[i][j] = scanner.nextInt();
            for (int i = 0; i < 2; i++)
                for (int j = 1; j < N; j++)
                    t[i][j] = scanner.nextInt();
            x[0] = scanner.nextInt();
            x[1] = scanner.nextInt();
            for (int i = 0; i < pd.length; i++)
                Arrays.fill(pd[i], -1);
            System.out.println(Math.min(solve(0, 0), solve(1, 0)));
        }
        scanner.close();
    }
}
