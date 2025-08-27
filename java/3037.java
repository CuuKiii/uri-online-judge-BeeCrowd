// um pouco grande porém funcional
import java.io.IOException;
 
import java.util.Scanner;
import java.util.Scanner;

public class Main {

	public static class jogoDardosMJ {
		private int qtdTestes = 0;
		private int somatorioPMaria = 0;
		private int somatorioPJoao = 0;
		private String vencedor = "";

		private void setQtdTestes(int qtdTestes) {
			this.qtdTestes = qtdTestes;
		}

		private int getQtdTestes() {
			return qtdTestes;
		}

		public int getSomatorioPJoao() {
			return somatorioPJoao;
		}

		public int getSomatorioPMaria() {
			return somatorioPMaria;
		}

		public void setSomatorioPJoao(int somatorioPJoao) {
			this.somatorioPJoao = somatorioPJoao;
		}

		public void setSomatorioPMaria(int somatorioPMaria) {
			this.somatorioPMaria = somatorioPMaria;
		}

		private void setVencedor(String vencedor) {
			this.vencedor = vencedor;
		}

		private String getVencedor() {
			return this.vencedor;
		}

		private void calcPontosJoao(int dJoao, int xJoao) {
			int pontosJoao = (dJoao * xJoao);
			this.somatorioPJoao += pontosJoao;
			// System.out.println(this.somatorioPJoao);
		}

		private void calcPontosMaria(int dMaria, int xMaria) {
			int pontosMaria = (dMaria * xMaria);
			this.somatorioPMaria += pontosMaria;
			// System.out.println(this.somatorioPMaria);
		}
	}

	public static void main(String[] args) {
		Scanner entradaDados = new Scanner(System.in);
		jogoDardosMJ metodos = new jogoDardosMJ();

		int qtdTestes = entradaDados.nextInt();
		metodos.setQtdTestes(qtdTestes);

		for (int i = 0; i < metodos.getQtdTestes(); i++) {
			for (int j = 0; j < 3; j++) {
				int xJoao = entradaDados.nextInt();
				int dJoao = entradaDados.nextInt();
				metodos.calcPontosJoao(dJoao, xJoao);
			}
			for (int j = 0; j < 3; j++) {
				int xMaria = entradaDados.nextInt();
				int dMaria = entradaDados.nextInt();
				metodos.calcPontosMaria(dMaria, xMaria);
			}
			if (metodos.getSomatorioPJoao() > metodos.getSomatorioPMaria()) {
				metodos.setVencedor("JOAO");
			} else {
				metodos.setVencedor("MARIA");
			}
			metodos.setSomatorioPJoao(0);
			metodos.setSomatorioPMaria(0);
			System.out.println(metodos.getVencedor());
		}
		entradaDados.close();
	}
}
