import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        List<Integer> evens = new ArrayList<>();
        List<Integer> odds = new ArrayList<>();

        for (int i = 1; i <= n; i++) {
            int currentNumber = Integer.parseInt(br.readLine());
            if (currentNumber % 2 != 0) {
                odds.add(currentNumber);
            } else {
                evens.add(currentNumber);
            }
        }

        Collections.sort(evens);
        Collections.sort(odds, Collections.reverseOrder());

        for (int num : evens) {
            System.out.println(num);
        }
        for (int num : odds) {
            System.out.println(num);
        }
    }
}
