import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while (true) {
            String line = br.readLine();
            if (line == null)
                break;

            if (line.isEmpty())
                continue;

            int[] ac = Arrays.stream(line.trim().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            int A = ac[0];
            int C = ac[1];

            line = br.readLine();
            if (line == null || line.isEmpty())
                break;

            int[] blocos = Arrays.stream(line.trim().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();

            int resposta = 0;
            for (int i = 1; i < C; ++i) {
                if (blocos[i] > blocos[i - 1]) {
                    resposta += blocos[i] - blocos[i - 1];
                }
            }
            resposta += A - blocos[C - 1];

            System.out.println(resposta);
        }
    }
}
