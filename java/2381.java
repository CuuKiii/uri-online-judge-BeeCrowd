import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] firstLine = br.readLine().split(" ");
        int n = Integer.parseInt(firstLine[0]);
        int res = Integer.parseInt(firstLine[1]);
        DynamicList list = new DynamicList();

        for (int i = 0; i < n; i++) {
            list.add(br.readLine());
        }

        list.sort();
        System.out.println(list.get(res - 1));
    }
}

class DynamicList {
    private String[] array;
    private int size;

    public DynamicList() {
        array = new String[10];
        size = 0;
    }

    public void add(String value) {
        if (size == array.length) {
            resize();
        }
        array[size++] = value;
    }

    private void resize() {
        String[] newArray = new String[array.length * 2];
        System.arraycopy(array, 0, newArray, 0, array.length);
        array = newArray;
    }

    public void sort() {
        for (int i = 0; i < size - 1; i++) {
            for (int j = 0; j < size - 1 - i; j++) {
                if (array[j].compareTo(array[j + 1]) > 0) {
                    String temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }

    public String get(int index) {
        if (index >= 0 && index < size) {
            return array[index];
        }
        throw new IndexOutOfBoundsException("Index out of bounds");
    }
}
