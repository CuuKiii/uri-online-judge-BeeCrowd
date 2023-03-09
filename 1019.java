import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int qtdsegundos;
        Scanner sc = new Scanner(System.in);
        qtdsegundos = sc.nextInt();
        int horas = qtdsegundos / 3600;
        int minutos = (qtdsegundos % 3600) / 60;
        int segundos = (qtdsegundos % 3600) % 60;
 
        System.out.print(horas + ":" + minutos + ":" + segundos + "\n");
    }
} 
