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
            
            int attQtt;
            try {
                attQtt = Integer.parseInt(line);
            } catch (NumberFormatException e) {
                break;
            }
            
            String[] cardsInfo = br.readLine().trim().split(" ");
            int cardsM = Integer.parseInt(cardsInfo[0]);
            int cardsL = Integer.parseInt(cardsInfo[1]);
            
            List<Object> deckM = new ArrayList<>();
            List<Object> deckL = new ArrayList<>();
            
            if (attQtt == 1) {
                
                for (int i = 0; i < cardsM; i++) {
                    int card = Integer.parseInt(br.readLine().trim());
                    deckM.add(card);
                }
                for (int i = 0; i < cardsL; i++) {
                    int card = Integer.parseInt(br.readLine().trim());
                    deckL.add(card);
                }
            } else {
                
                for (int i = 0; i < cardsM; i++) {
                    String[] cardValues = br.readLine().trim().split(" ");
                    int[] card = new int[attQtt];
                    for (int j = 0; j < attQtt; j++) {
                        card[j] = Integer.parseInt(cardValues[j]);
                    }
                    deckM.add(card);
                }
                for (int i = 0; i < cardsL; i++) {
                    String[] cardValues = br.readLine().trim().split(" ");
                    int[] card = new int[attQtt];
                    for (int j = 0; j < attQtt; j++) {
                        card[j] = Integer.parseInt(cardValues[j]);
                    }
                    deckL.add(card);
                }
            }
            
            String[] choices = br.readLine().trim().split(" ");
            int choiceM = Integer.parseInt(choices[0]);
            int choiceL = Integer.parseInt(choices[1]);
            
            int attribute = Integer.parseInt(br.readLine().trim());
            
            
            if (attQtt == 1) {
                int cardM = (Integer) deckM.get(choiceM - 1);
                int cardL = (Integer) deckL.get(choiceL - 1);
                
                if (cardM > cardL) {
                    out.println("Marcos");
                } else if (cardM < cardL) {
                    out.println("Leonardo");
                } else {
                    out.println("Empate");
                }
            } else {
                int[] cardM = (int[]) deckM.get(choiceM - 1);
                int[] cardL = (int[]) deckL.get(choiceL - 1);
                
                if (cardM[attribute - 1] > cardL[attribute - 1]) {
                    out.println("Marcos");
                } else if (cardM[attribute - 1] < cardL[attribute - 1]) {
                    out.println("Leonardo");
                } else {
                    out.println("Empate");
                }
            }
        }
        
        out.close();
        br.close();
    }
}
