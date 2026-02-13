import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        while (sc.hasNextLine()) {
            String line = sc.nextLine().trim();
            if (line.isEmpty()) continue;
            
            String[] parts = line.split(" ");
            
            try {
                double x1 = Double.parseDouble(parts[0]);
                double y1 = Double.parseDouble(parts[1]);
                double x2 = Double.parseDouble(parts[2]);
                double y2 = Double.parseDouble(parts[3]);
                double V = Double.parseDouble(parts[4]);
                double R1 = Double.parseDouble(parts[5]);
                double R2 = Double.parseDouble(parts[6]);
                
                double distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                distance += 1.5 * V;
                distance -= R1;
                
                System.out.println(distance <= R2 ? "Y" : "N");
                
            } catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
                break;
            }
        }
        
        sc.close();
    }
}
