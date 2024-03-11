import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String line = reader.readLine();

        while(line != null && line.length() > 0) {
            String[] splitLine = line.split(" ");
            int N = Integer.parseInt(splitLine[0]);
            int B = Integer.parseInt(splitLine[1]);

            line = reader.readLine();
            if (line == null) {
                break;
            }

            String[] bolasInput = line.split(" ");
            int[] bolas = new int[B];
            for(int i=0; i<B; i++){
                bolas[i] = Integer.parseInt(bolasInput[i]);
            }

            Set<Integer> possibilities = new HashSet<>();
            possibilities.add(0);

            for(int i = 0; i < B; ++i) {
                for(int j = i + 1; j < B; ++j) {
                    possibilities.add(Math.abs(bolas[i] - bolas[j]));
                }
            }

            System.out.println(possibilities.size() == N + 1 ? "Y" : "N");

            line = reader.readLine();
        }
    }
}
