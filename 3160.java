import java.util.Scanner;

class Node {
    String name;
    Node next;

    public Node(String name) {
        this.name = name;
        this.next = null;
    }
}

public class Main {
    public static void main(String[] args) {
        // Declarar variáveis e inicializar a lista
        String list_L, list_N, friend_S;
        Node head = null;

        Scanner scanner = new Scanner(System.in);

        // Ler a lista de amigos L de Luiggy L
        list_L = scanner.nextLine();

        // Dividir e inserir na lista L
        String[] names = list_L.split(" ");
        for (String name : names) {
            head = insertAtEnd(head, name);
        }

        // Ler a lista N
        list_N = scanner.nextLine();

        // Ler o amigo S
        friend_S = scanner.next();

        // Verificar se deve referir a lista N a um amigo S
        if(friend_S.equals("nao")) {
            // Inserir a lista N no final de L
            names = list_N.split(" ");
            for (String name : names) {
                head = insertAtEnd(head, name);
            }
        } else {
            // Encontrar o amigo S na lista L
            Node friendNode = findNode(friend_S, head);
            if (friendNode != null) {
                // Inserir a lista N antes do amigo S
                Node prev = null;
                Node current = head;
                while (current != null && !current.name.equals(friend_S)) {
                    prev = current;
                    current = current.next;
                }
                for (String name : list_N.split(" ")) {
                    Node newNode = new Node(name);
                    if (prev == null) {
                        newNode.next = head;
                        head = newNode;
                    } else {
                        newNode.next = prev.next;
                        prev.next = newNode;
                    }
                    prev = newNode;
                }
            } else {
                // Se o amigo S não for encontrado, inserir no final de L
                for (String name : list_N.split(" ")) {
                    head = insertAtEnd(head, name);
                }
            }
        }

        // Imprimir a lista atualizada
        printList(head);
    }

    // Função para inserir um novo nó no final da lista
    static Node insertAtEnd(Node head, String name) {
        Node newNode = new Node(name);
        if (head == null) {
            return newNode;
        } else {
            Node last = head;
            while (last.next != null) {
                last = last.next;
            }
            last.next = newNode;
            return head;
        }
    }

    // Função para encontrar um nó com o nome especificado
    static Node findNode(String name, Node head) {
        Node node = head;
        while (node != null) {
            if (node.name.equals(name)) {
                return node;
            }
            node = node.next;
        }
        return null;
    }

    // Função para imprimir a lista de nomes
    static void printList(Node head) {
        Node node = head;
        while (node != null) {
            System.out.print(node.name);
            node = node.next;
            if (node != null) {
                System.out.print(" ");
            }
        }
        System.out.println();
    }
}
