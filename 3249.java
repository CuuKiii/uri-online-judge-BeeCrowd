import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int vitoria = 0;
        int n = scanner.nextInt();
        scanner.nextLine();  
        char l1 = 0;
        char l2 = 0;
        
        for(int i = 0; i < n; i++) {  
            String line = scanner.nextLine();  
            
            l1 = line.charAt(0);
            for(int j = 1; j < line.length(); j++) {
                l2 = line.charAt(j);
                if(l1 == 'C' && l2 == 'D') {
                    vitoria -= 1;
                }
                l1 = line.charAt(j);
            }
            vitoria += 1;
        }
        
        System.out.println(vitoria);
        
        scanner.close();
    }
}
