import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int A = sc.nextInt();
        sc.nextLine(); 
        String[] picos = sc.nextLine().split(" ");
        
        int temp = 0;
        int below = 0;
        int above = 0;
        int equal = 0;
        boolean valid = true;
        
        for (int i = 0; i <= A && i < picos.length; i++) {
            int current = Integer.parseInt(picos[i]);
            
            if (i == 0) {
                temp = current;
            } else {
                if (temp < current) {
                    temp = current;
                    above++;
                    below = 0;
                    equal = 0;
                } else if (temp > current) {
                    temp = current;
                    below++;
                    above = 0;
                    equal = 0;
                } else {
                    equal++;
                }
                
                if (above == 2 || below == 2 || equal == 1) {
                    System.out.println("0");
                    valid = false;
                    break;
                }
            }
        }
        
        if (valid) {
            System.out.println("1");
        }
        
        sc.close();
    }
}
