import java.io.*;
import java.util.*;

public class Main {

    public static List<String> input = new ArrayList<>();
    public static List<String> output = new ArrayList<>();

    public static void main(String[] args) throws IOException {
        readInput();
        for (String line: input) {
            String[] coords = line.split(" ", 6);
            int R1 = Integer.parseInt(coords[0]);
            int X1 = Integer.parseInt(coords[1]);
            int Y1 = Integer.parseInt(coords[2]);
            int R2 = Integer.parseInt(coords[3]);
            int X2 = Integer.parseInt(coords[4]);
            int Y2 = Integer.parseInt(coords[5]);
            if (distance(X1, Y1, X2, Y2) + R2 <= R1) output.add("RICO");
            else output.add("MORTO");
        }
        for (String res: output) {
            System.out.println(res);
        }
    }

    public static void readInput() throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String line;
        while ((line = reader.readLine()) != null) {
            input.add(line.trim());
        }
        reader.close();
    }

    public static double distance(int x1, int y1, int x2, int y2) {
        return Math.hypot(x1 - x2, y1 - y2);
    }
}
