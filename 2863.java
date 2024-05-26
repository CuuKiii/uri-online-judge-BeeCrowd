import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line;
        List<String> lines = new ArrayList<>();

        while ((line = br.readLine()) != null) {
            lines.add(line);
        }
       
        while(lines.size() != 0){

            int number = Integer.parseInt(lines.remove(0));
            double temp = 0;

            for(int i = 0; i < number; i++){

                double record = Double.parseDouble(lines.remove(0));

                 if(i == 0){
                    temp = record;
                 }

                if(record < temp){
                    temp = record;
                }
            }

            System.out.printf("%.2f", temp);
            System.out.println();

            if(lines.size() == 1){
                break;
            }
        }
    }
}
