import java.io.IOException;
import java.util.Scanner;

public class Main {
 
	public static void main(String[] args) throws IOException {
		Scanner leitor = new Scanner(System.in);
		int N = leitor.nextInt();
		for (int i = 0; i < N; i++) {
			String nome = leitor.next();
			double dificuldade = leitor.nextDouble();
			double[] notas = new double[7];
			for (int j = 0; j < notas.length; j++) {
				notas[j] = leitor.nextDouble();
			}
			zerarNotaMaisBaixa(notas);
			zerarNotaMaisAlta(notas);
			double notaFinal = calcularNotaFinal(notas, dificuldade);
			System.out.println(String.format("%s %.2f", nome, notaFinal));
		}
	}
	
	private static void zerarNotaMaisBaixa(double[] notas) {
		int indice = 0;
		for (int i = 1; i < notas.length; i++) {
			if (notas[i] < notas[indice]) indice = i;
		}
		notas[indice] = 0.0;
	}
	
	private static void zerarNotaMaisAlta(double[] notas) {
		int indice = 0;
		for (int i = 1; i < notas.length; i++) {
			if (notas[i] > notas[indice]) indice = i;
		}
		notas[indice] = 0.0;
	}
	
	private static double calcularNotaFinal(double[] notas, double dificuldade) {
		double soma = 0.0;
		for (int i = 0; i < notas.length; i++) {
			soma += notas[i];
		}
		return (soma * dificuldade);
	}
	
}
