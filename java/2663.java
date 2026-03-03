import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        int number = Integer.parseInt(br.readLine().trim());
        int ranking = Integer.parseInt(br.readLine().trim());
        
        List<Integer> people = new ArrayList<>();
        
        for (int i = 0; i < number; i++) {
            people.add(Integer.parseInt(br.readLine().trim()));
        }
        
        // Ordenar em ordem decrescente
        Collections.sort(people, Collections.reverseOrder());
        
        int cont = 0;
        for (int j = ranking; j < people.size(); j++) {
            if (people.get(ranking - 1).equals(people.get(j))) {
                cont++;
            }
        }
        
        out.println(ranking + cont);
        out.close();
        br.close();
    }
}
