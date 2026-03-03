import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        int[] floors = new int[3];
        
        floors[0] = Integer.parseInt(br.readLine().trim());
        floors[1] = Integer.parseInt(br.readLine().trim());
        floors[2] = Integer.parseInt(br.readLine().trim());
        
        int[] minutesEachFloor = new int[3];
        minutesEachFloor[0] = floors[1] * 2 + floors[2] * 4;
        minutesEachFloor[1] = floors[0] * 2 + floors[2] * 2;
        minutesEachFloor[2] = floors[0] * 4 + floors[1] * 2;
        
        int minMinutes = Math.min(minutesEachFloor[0], 
                                 Math.min(minutesEachFloor[1], minutesEachFloor[2]));
        
        out.println(minMinutes);
        out.close();
        br.close();
    }
}
