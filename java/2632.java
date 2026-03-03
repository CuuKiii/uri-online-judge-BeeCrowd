import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        
        int cases = Integer.parseInt(br.readLine().trim());
        
        for (int i = 0; i < cases; i++) {
            String[] dimensions = br.readLine().trim().split(" ");
            int width = Integer.parseInt(dimensions[0]);
            int height = Integer.parseInt(dimensions[1]);
            int minX = Integer.parseInt(dimensions[2]);
            int minY = Integer.parseInt(dimensions[3]);
            
            String[] spellInfo = br.readLine().trim().split(" ");
            String spell = spellInfo[0];
            int level = Integer.parseInt(spellInfo[1]);
            int centerX = Integer.parseInt(spellInfo[2]);
            int centerY = Integer.parseInt(spellInfo[3]);
            
            int maxX = minX + width;
            int maxY = minY + height;
            
            
            int distanceX = Math.max(minX - centerX, Math.max(0, centerX - maxX));
            int distanceY = Math.max(minY - centerY, Math.max(0, centerY - maxY));
            double totalDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            
         
            int range = 0;
            int damage = 0;
            
            switch (spell) {
                case "fire":
                    damage = 200;
                    if (level == 1) range = 20;
                    else if (level == 2) range = 30;
                    else if (level == 3) range = 50;
                    break;
                case "water":
                    damage = 300;
                    if (level == 1) range = 10;
                    else if (level == 2) range = 25;
                    else if (level == 3) range = 40;
                    break;
                case "earth":
                    damage = 400;
                    if (level == 1) range = 25;
                    else if (level == 2) range = 55;
                    else if (level == 3) range = 70;
                    break;
                case "air":
                    damage = 100;
                    if (level == 1) range = 18;
                    else if (level == 2) range = 38;
                    else if (level == 3) range = 60;
                    break;
            }
            
            if (totalDistance <= range) {
                out.println(damage);
            } else {
                out.println(0);
            }
        }
        
        out.close();
        br.close();
    }
}
