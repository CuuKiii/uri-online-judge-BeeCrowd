import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] values = scanner.nextLine().split(" ");
        int a = Integer.parseInt(values[0]);
        int b = Integer.parseInt(values[1]);

        String action;
        for (int i = 0; i < b; i++) {
            action = scanner.nextLine().trim();
            if ("fechou".equals(action)) {
                a++;
            } else {
                a--;
            }
        }

        System.out.println(a);
    }
}
