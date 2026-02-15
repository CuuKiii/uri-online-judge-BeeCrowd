import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        while (sc.hasNext()) {
            String firstLine = sc.nextLine().trim();
            if (firstLine.isEmpty()) continue;
            
            int cases;
            try {
                cases = Integer.parseInt(firstLine);
            } catch (NumberFormatException e) {
                break;
            }
            
            double sumT = 0.0;
            int sumW = 0;
            
            for (int i = 0; i < cases; i++) {
                int grade = sc.nextInt();
                int workload = sc.nextInt();
                sc.nextLine(); // consumir a quebra de linha
                
                sumT += grade * workload;
                sumW += workload;
            }
            
            double API = sumT / (sumW * 100.0);
            System.out.printf("%.4f%n", API);
        }
        
        sc.close();
    }
}
