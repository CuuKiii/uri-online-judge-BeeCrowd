import java.util.Scanner;

public class Main {

    static class Nomes implements Comparable<Nomes> {
        String nome;
        Nomes next;

        @Override
        public int compareTo(Nomes o) {
            return this.nome.compareTo(o.nome);
        }
    }

    static class ListaEncadeada {
        Nomes head;

        void adicionar(Nomes novo) {
            if (head == null || head.compareTo(novo) > 0) {
                novo.next = head;
                head = novo;
            } else {
                Nomes atual = head;
                while (atual.next != null && atual.next.compareTo(novo) < 0) {
                    atual = atual.next;
                }
                novo.next = atual.next;
                atual.next = novo;
            }
        }

        void imprimir() {
            Nomes atual = head;
            while (atual != null) {
                System.out.println(atual.nome);
                atual = atual.next;
            }
        }
    }

    public static void main(String[] args) {
        char comportamento;
        int bemComportado = 0, mauComportado = 0;
        int casos;

        Scanner scan = new Scanner(System.in);
        casos = scan.nextInt();

        ListaEncadeada lista = new ListaEncadeada();

        for (int i = 0; i < casos; i++) {
            comportamento = scan.next().charAt(0);
            Nomes nome = new Nomes();
            nome.nome = scan.next();

            lista.adicionar(nome);

            if (comportamento == '+')
                bemComportado++;
            else
                mauComportado++;
        }

        lista.imprimir();
        System.out.println("Se comportaram: " + bemComportado + " | Nao se comportaram: " + mauComportado);
    }
}
