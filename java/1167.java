import java.util.Scanner;

class Main {
    static class Crianca {
        String nome;
        int valor;
        Crianca ant;
        Crianca prox;
    }

    static class ListaDuplamenteEncadeada {
        Crianca head;
        Crianca tail;
        int size;

        void adicionar(Crianca crianca) {
            if (head == null) {
                head = tail = crianca;
                crianca.prox = crianca.ant = crianca;
            } else {
                tail.prox = crianca;
                crianca.ant = tail;
                crianca.prox = head;
                head.ant = crianca;
                tail = crianca;
            }
            size++;
        }

        void remover(Crianca crianca) {
            if (size == 1) {
                head = tail = null;
            } else {
                crianca.ant.prox = crianca.prox;
                crianca.prox.ant = crianca.ant;
                if (crianca == head) {
                    head = crianca.prox;
                }
                if (crianca == tail) {
                    tail = crianca.ant;
                }
            }
            size--;
        }

        Crianca get(int index) {
            Crianca current = head;
            for (int i = 0; i < index; i++) {
                current = current.prox;
            }
            return current;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n, i, marcados, comp, comp1;

        while ((n = scanner.nextInt()) != 0) {
            ListaDuplamenteEncadeada lista = new ListaDuplamenteEncadeada();
            for (i = 0; i < n; i++) {
                Crianca crianca = new Crianca();
                crianca.nome = scanner.next();
                crianca.valor = scanner.nextInt();
                lista.adicionar(crianca);
            }

            marcados = 0;
            comp = lista.get(0).valor;
            int n1 = n - 1;
            Crianca atual = lista.head;

            while (marcados != n1 && n >= 2) {
                if (comp % 2 != 0) {
                    for (int k = 0; k < comp; k++) {
                        atual = atual.prox;
                    }
                } else {
                    for (int k = 0; k < comp; k++) {
                        atual = atual.ant;
                    }
                }
                comp1 = atual.valor;
                lista.remover(atual);
                marcados++;
                n--;
                comp = comp1;
            }
            System.out.println("Vencedor(a): " + lista.head.nome);
        }
        scanner.close();
    }
}
