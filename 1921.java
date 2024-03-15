import java.util.Scanner;

public class Main1921 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        long L = scan.nextLong();
        long total = (( L * L ) - ( 3 * L )) / 2;
        System.out.println(total);
        scan.close();
    }
}
