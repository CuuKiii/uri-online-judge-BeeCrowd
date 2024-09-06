import java.util.Arrays;
import java.util.Scanner;

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
        Arrays.sort(elements, 0, size);
    }

    private void resize() {
        String[] newElements = new String[elements.length * 2];
        System.arraycopy(elements, 0, newElements, 0, elements.length);
        elements = newElements;
    }

    public boolean contains(String element) {
        return Arrays.binarySearch(elements, 0, size, element) >= 0;
    }

    public int getSize() {
        return size;
    }

    public String get(int index) {
        return elements[index];
    }
}

public class Main {
    public static void main(String[] args) {
        DynamicList s = new DynamicList();
        DynamicList n = new DynamicList();

        Scanner scanner = new Scanner(System.in);
        String[] scan = scanner.nextLine().split(" ");
        while (!scan[0].equals("FIM")) {
            if (scan[1].equals("YES")) {
                if (!s.contains(scan[0])) {
                    s.add(scan[0]);
                }
            }
            if (scan[1].equals("NO")) {
                if (!n.contains(scan[0])) {
                    n.add(scan[0]);
                }
            }
            scan = scanner.nextLine().split(" ");
        }

        for (int i = 0; i < s.getSize(); i++) {
            System.out.println(s.get(i));
        }

        for (int i = 0; i < n.getSize(); i++) {
            System.out.println(n.get(i));
        }

        int maxLength = 0;
        String longestName = "";

        for (int i = 0; i < s.getSize(); i++) {
            if (s.get(i).length() >= maxLength) {
                longestName = s.get(i);
                maxLength = s.get(i).length();
            }
        }

        System.out.println("\nAmigo do Habay:\n" + longestName);
    }
}
