import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        String[] lines = br.readLine().split("\n");
        int[] values = Arrays.stream(lines[0].split(" ")).mapToInt(Integer::parseInt).toArray();

        int e = values[0];
        int f = values[1];
        int c = values[2];
        int total = 0;

        e += f;

        while (e >= c) {
            total++;
            e -= c;
 e++;
        }
        System.out.println(total);
    }
}
