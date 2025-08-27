import java.util.Scanner;

class Node {
    String data;
    Node next;

    Node(String data) {
        this.data = data;
        this.next = null;
    }
}

class SortedLinkedList {
    private Node head;

    public SortedLinkedList() {
        this.head = null;
    }

    public void insert(String data) {
        if (!contains(data)) {
            Node newNode = new Node(data);
            if (head == null || head.data.compareTo(data) > 0) {
                newNode.next = head;
                head = newNode;
            } else {
                Node current = head;
                while (current.next != null && current.next.data.compareTo(data) < 0) {
                    current = current.next;
                }
                newNode.next = current.next;
                current.next = newNode;
            }
        }
    }

    private boolean contains(String data) {
        Node current = head;
        while (current != null) {
            if (current.data.equals(data)) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    public String toString() {
        StringBuilder builder = new StringBuilder();
        Node current = head;
        while (current != null) {
            builder.append(current.data).append(" ");
            current = current.next;
        }
        return builder.toString().trim();
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        sc.nextLine();
        for (int i = 0; i < x; i++) {
            SortedLinkedList list = new SortedLinkedList();
            for (String str : sc.nextLine().split(" ")) {
                list.insert(str);
            }
            System.out.println(list.toString());
        }
    }
}
