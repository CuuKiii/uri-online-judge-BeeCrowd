import java.util.Scanner;
public class Main{
	public static void main(String[] args){
		Scanner prompt = new Scanner(System.in);
		int n, i;
		double x;
		n = prompt.nextInt();
		for(i = 0; i < n; i++){
			x = prompt.nextInt();
			System.out.printf("%d kg\n", (long)Math.floor(Math.pow(2,x)/12000));
		}
	}
}
