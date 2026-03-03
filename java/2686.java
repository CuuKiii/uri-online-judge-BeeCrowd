import java.io.IOException;
import java.util.Scanner;

public class Main{
	
    public static void main(String[] args) throws IOException {
    	
    	Scanner leitor = new Scanner(System.in);
    	
    	float x;

      	while (leitor.hasNext()){

            double y = leitor.nextDouble();
      
      		x = (int)y;
      		int horas = ((int)(y * 240) / 3600) % 60;
      		int minutos = ((int)(y * 240) / 60) % 60;
      		int segundos = (int)(y * 240) % 60;
      
      		if (x >= 0 && x < 90 || x == 360)
      			System.out.printf("Bom Dia!!\n%02d:%02d:%02d\n", (horas + 6) % 24, minutos, segundos);
      		else if (x >= 90 && x < 180)
      			System.out.printf("Boa Tarde!!\n%02d:%02d:%02d\n", (horas + 6) % 24, minutos, segundos);
      		else if (x >= 180 && x < 270)
      			System.out.printf("Boa Noite!!\n%02d:%02d:%02d\n", (horas + 6) % 24, minutos, segundos);
      		else if (x >= 270 && x < 360)
      			System.out.printf("De Madrugada!!\n%02d:%02d:%02d\n", (horas + 6) % 24, minutos, segundos);
      			
      	
    	}
    }
    
}
