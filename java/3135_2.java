import java.util.Scanner;

class Node {
    String value;
    Node next;

    Node(String value) {
        this.value = value;
        this.next = null;
    }
}

class Lista {
    Node head;

    void add(String value) {
        Node newNode = new Node(value);
        if (head == null || head.value.length() > value.length()) {
            newNode.next = head;
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null && current.next.value.length() <= value.length()) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    String removeFirst() {
        if (head == null) return null;
        String value = head.value;
        head = head.next;
        return value;
    }

    boolean isEmpty() {
        return head == null;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Lista[] lists = new Lista[100]; // Supondo que o comprimento máximo da string seja 100
        for (int i = 0; i < 100; i++) {
            lists[i] = new Lista();
        }

        int size = scan.nextInt();
        scan.nextLine();

        for (int i = 0; i < size; i++) {
            String s = scan.nextLine();
            int len = s.length();
            lists[len].add(s);
        }

        boolean hasMoreElements = true;
        while (hasMoreElements) {
            hasMoreElements = false;
            boolean firstElement = true;
            StringBuilder line = new StringBuilder();
            for (Lista list : lists) {
                if (!list.isEmpty()) {
                    if (!firstElement) {
                        line.append(", ");
                    }
                    line.append(list.removeFirst());
                    hasMoreElements = true;
                    firstElement = false;
                }
            }
            if (line.length() > 0) {
                System.out.println(line.toString());
            }
        }
    }
}
