import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String number = sc.nextLine().trim();
        int cont = 0;
        
        for (int i = 0; i < number.length(); i++) {
            if (number.charAt(i) == '1') {
                cont++;
            }
        }
        
        if (cont % 2 != 0) {
            System.out.println(number + "1");
        } else {
            System.out.println(number + "0");
        }
        
        sc.close();
    }
}
