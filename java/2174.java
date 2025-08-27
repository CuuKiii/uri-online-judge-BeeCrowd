import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int conta = Integer.parseInt(sc.nextLine());
        ListaEstatica nomes = new ListaEstatica(conta);
        
        for (int i = 0; i < conta; i++) {
            String nome = sc.nextLine();
            if (nomes.buscar(nome) == -1) { // Verifica se o nome já está na lista
                nomes.adicionarFinal(nome);
            }
        }
        
        System.out.printf("Falta(m) %d pomekon(s).\n", (151 - nomes.getTamanho()));
    }
}

class ListaEstatica {
    private String[] v;
    private int tamanho;

    public ListaEstatica(int n) {
        v = new String[n];
        tamanho = 0;
    }

    public void adicionarFinal(String valor) {
        if (tamanho < v.length) {
            v[tamanho] = valor;
            tamanho++;
        } else {
            System.out.println("Lista cheia!");
        }
    }

    public void adicionarPosicao(String valor, int pos) {
        if (pos < v.length) {
            for (int i = tamanho; i > pos; i--) {
                v[i] = v[i - 1];
            }
            v[pos] = valor;
            tamanho++;
        } else {
            System.out.println("Posição informada não existe.");
        }
    }

    public void adicionarInicio(String valor) {
        adicionarPosicao(valor, 0);
    }

    public void removerFinal() {
        if (tamanho == 0) {
            System.out.println("Lista vazia!");
        } else {
            tamanho--;
        }
    }

    public void removerPosicao(int pos) {
        if (tamanho == 0) {
            System.out.println("Lista vazia!");
        } else if (pos < 0 || pos >= tamanho) {
            System.out.println("Posição inválida!");
        } else {
            for (int i = pos; i < tamanho - 1; i++) {
                v[i] = v[i + 1];
            }
            tamanho--;
        }
    }

    public void removerInicio() {
        removerPosicao(0);
    }

    public int buscar(String valor) {
        for (int i = 0; i < tamanho; i++) {
            if (valor.equals(v[i])) {
                return i;
            }
        }
        return -1;
    }

    public void exibir() {
        for (int i = 0; i < tamanho; i++) {
            System.out.print(v[i] + " ");
        }
        System.out.println();
    }

    public boolean vazia() {
        return tamanho == 0;
    }

    public int getTamanho() {
        return tamanho;
    }

    public String getValor(int pos) {
        if (pos >= 0 && pos < tamanho) {
            return v[pos];
        } else {
            throw new IndexOutOfBoundsException("Posição inválida!");
        }
    }

    public void setValor(int pos, String valor) {
        if (pos >= 0 && pos < tamanho) {
            v[pos] = valor;
        } else {
            throw new IndexOutOfBoundsException("Posição inválida!");
        }
    }
}
