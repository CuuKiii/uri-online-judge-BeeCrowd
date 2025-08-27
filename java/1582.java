import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		sc.useLocale(Locale.ENGLISH);
		Locale.setDefault(new Locale("en", "US"));
		
		while(sc.hasNext()){
			int a=sc.nextInt();
			int b=sc.nextInt();
			int c=sc.nextInt();
			
			int gcdAB = gcd(a,b);
			boolean isPythagorean = isPythagorean(a, b, c);
			
			if(isPythagorean && gcd(gcdAB,c)==1)
				System.out.println("tripla pitagorica primitiva");
			else if(isPythagorean)
				System.out.println("tripla pitagorica");
			else
				System.out.println("tripla");
		}
		sc.close();
	}

	private static int gcd(int a, int b) {
		while(b!=0){
			int temp=b;
			b=a%b;
			a=temp;
		}
		return a ;
	}

	private static boolean isPythagorean(int a, int b, int c) {
		int max=Math.max(a, Math.max(b, c));
		int sumOfSquares=a*a+b*b+c*c-max*max;
		return max*max==sumOfSquares;
	}
}
