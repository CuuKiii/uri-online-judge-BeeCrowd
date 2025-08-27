import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int alice = 0;
        int bob = 0;

        Scanner sc = new Scanner(System.in);
        String[] inputs = sc.nextLine().split(" ");
        int n = Integer.parseInt(inputs[0]);
        int t = Integer.parseInt(inputs[1]);
        int limite = Integer.parseInt(inputs[2]);

        for(int i = 0; i < n - 1; i++) {
            int s = sc.nextInt();
            if(Math.abs(t - s) <= limite) {
                if(i % 2 == 0) {
                    alice += Math.abs(t - s);
                } else {
                    bob += Math.abs(t - s);
                }
                t = s;
            }
        }

        System.out.println(alice + " " + bob);
    }
}
