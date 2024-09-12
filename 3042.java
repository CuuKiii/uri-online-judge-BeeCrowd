import java.util.Scanner;

class Node {
    String[] data;
    Node next;

    Node(String[] data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    Node head;
    Node tail;

    void add(String[] data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    Node get(int index) {
        Node current = head;
        for (int i = 0; i < index; i++) {
            if (current != null) {
                current = current.next;
            }
        }
        return current;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            int m = scanner.nextInt();
            scanner.nextLine(); // consome a nova linha restante
            if (m == 0) {
                break;
            }
            LinkedList caminho = new LinkedList();
            for (int i = 0; i < m; i++) {
                caminho.add(scanner.nextLine().split(" "));
            }

            int atual = 1;
            int movs = 0;
            Node currentNode = caminho.head;
            for (int i = 0; i < m; i++) {
                if (currentNode.data[atual].equals("0")) {
                    currentNode = currentNode.next;
                    continue;
                }
                int anterior = atual;
                if (countZeros(currentNode.data) == 1) {
                    atual = indexOfZero(currentNode.data);
                } else {
                    int esquerda = normaliza(anterior - 1);
                    int direita = normaliza(anterior + 1);
                    Node proxima = currentNode.next;
                    if (proxima.data[esquerda].equals("0") && Math.abs(anterior - esquerda) < Math.abs(anterior - direita)) {
                        atual = esquerda;
                    } else {
                        atual = direita;
                    }
                }
                movs += Math.abs(atual - anterior);
                currentNode = currentNode.next;
            }
            System.out.println(movs);
        }
    }

    public static int normaliza(int posicao) {
        if (posicao == -1) {
            return 2;
        }
        if (posicao == 3) {
            return 0;
        }
        return posicao;
    }

    public static int countZeros(String[] arr) {
        int count = 0;
        for (String s : arr) {
            if (s.equals("0")) {
                count++;
            }
        }
        return count;
    }

    public static int indexOfZero(String[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].equals("0")) {
                return i;
            }
        }
        return -1;
    }
}
