import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class DynamicList {
    private String[] elements;
    private int size;

    public DynamicList() {
        elements = new String[10];
        size = 0;
    }

    public void add(String element) {
        if (size == elements.length) {
            resize();
        }
        elements[size++] = element;
    }

    public String get(int index) {
        if (index >= 0 && index < size) {
            return elements[index];
        }
        return null;
    }

    private void resize() {
        String[] newElements = new String[elements.length * 2];
        System.arraycopy(elements, 0, newElements, 0, elements.length);
        elements = newElements;
    }

    public int size() {
        return size;
    }
}

public class Main {
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            String word = "";
            String alphabet = reader.readLine();
            String number = reader.readLine();
            DynamicList letters = new DynamicList();

            String[] inputLetters = reader.readLine().split(" ");
            for (String letter : inputLetters) {
                letters.add(letter);
            }

            while (alphabet != null && number != null && letters.size() > 0) {
                for (int i = 0; i < Integer.parseInt(number); i++) {
                    word += alphabet.charAt(Integer.parseInt(letters.get(i)) - 1);
                }

                System.out.println(word);

                word = "";
                alphabet = reader.readLine();
                number = reader.readLine();
                if (alphabet != null && number != null) {
                    letters = new DynamicList();
                    inputLetters = reader.readLine().split(" ");
                    for (String letter : inputLetters) {
                        letters.add(letter);
                    }
                } else {
                    break;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
