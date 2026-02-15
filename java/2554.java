import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        String line;
        while ((line = br.readLine()) != null) {
            line = line.trim();
            if (line.isEmpty()) continue;
            
            
            if (!Character.isDigit(line.charAt(0))) {
                break;
            }
            
            String[] firstLine = line.split(" ");
            int friends = Integer.parseInt(firstLine[0]);
            int days = Integer.parseInt(firstLine[1]);
            
            boolean impossible = true;
            List<String[]> dates = new ArrayList<>();
            
           
            for (int i = 0; i < days; i++) {
                String[] dateInfo = br.readLine().trim().split(" ");
                dates.add(dateInfo);
            }
            
           
            for (String[] element : dates) {
                boolean todosDisponiveis = true;
                
               
                for (int j = 1; j <= friends; j++) {
                    if (element[j].equals("0")) {
                        todosDisponiveis = false;
                        break;
                    }
                }
                
                if (todosDisponiveis) {
                    impossible = false;
                    out.println(element[0]); 
                    break;
                }
            }
            
            if (impossible) {
                out.println("Pizza antes de FdI");
            }
        }
        
        out.close();
        br.close();
    }
}
