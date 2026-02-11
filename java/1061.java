import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] inicioDia = sc.nextLine().trim().split(" ");
        String[] inicioHora = sc.nextLine().trim().split(" : ");
        String[] fimDia = sc.nextLine().trim().split(" ");
        String[] fimHora = sc.nextLine().trim().split(" : ");

        int diaInicio = Integer.parseInt(inicioDia[1]);
        int horaInicio = Integer.parseInt(inicioHora[0]);
        int minutoInicio = Integer.parseInt(inicioHora[1]);
        int segundoInicio = Integer.parseInt(inicioHora[2]);

        int diaFim = Integer.parseInt(fimDia[1]);
        int horaFim = Integer.parseInt(fimHora[0]);
        int minutoFim = Integer.parseInt(fimHora[1]);
        int segundoFim = Integer.parseInt(fimHora[2]);

        int inicioSegundos = segundoInicio + minutoInicio * 60 + horaInicio * 3600 + diaInicio * 86400;
        int fimSegundos = segundoFim + minutoFim * 60 + horaFim * 3600 + diaFim * 86400;

        int duracao = fimSegundos - inicioSegundos;

        int dias = duracao / 86400;
        duracao %= 86400;

        int horas = duracao / 3600;
        duracao %= 3600;

        int minutos = duracao / 60;
        duracao %= 60;

        int segundos = duracao;

        System.out.println(dias + " dia(s)");
        System.out.println(horas + " hora(s)");
        System.out.println(minutos + " minuto(s)");
        System.out.println(segundos + " segundo(s)");

        sc.close();
    }
}
