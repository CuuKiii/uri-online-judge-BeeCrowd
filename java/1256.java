import java.util.Scanner;
import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		StringBuilder sb = new StringBuilder();

		for(int q=0 ; q<n ; q++){
	        int m = sc.nextInt();
	        int c = sc.nextInt();
	        int[] dados = new int[c];
	        
	        for (int i=0 ; i<c ; i++)
	        	dados[i] = sc.nextInt();
			
	        String[] keys = new String[m];
            Arrays.fill(keys, "");
            
            for (Integer x : dados) {
                keys[x % m] += " -> " + x;
            }
            
            for (int i=0 ; i<m ; i++){ 
                sb.append(i).append(keys[i]).append(" -> \\\n");
            }
            if (q<n-1) 
            	sb.append("\n");
		}
		System.out.print(sb.toString());
		sc.close();
	}
}
