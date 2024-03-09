import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner in = new Scanner(System.in);
        while (in.hasNext()) {
            int n = in.nextInt();
            if (n == 0) break;
            Queue<Integer> cards = new LinkedList<>();
            for (int i = 1; i <= n; i++) cards.add(i);
            List<Integer> discarded = new ArrayList<>();
            while (cards.size() > 1) {
                discarded.add(cards.poll());
                cards.add(cards.poll());
            }
            System.out.println("Discarded cards: " + discarded.toString().replaceAll("[\\[\\]]", ""));
            System.out.println("Remaining card: " + cards.peek());
        }
    }
}
