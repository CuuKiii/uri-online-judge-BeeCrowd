import java.util.Scanner;

public class Main {
    public static void swap(int[] copos, int pos1, int pos2){
        int aux;

        aux = copos[pos1];
        copos[pos1] = copos[pos2];
        copos[pos2] = aux;
    }

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n, mov;
        int[] copos = {0, 0, 0};
        char inicio;

        n = scanner.nextInt();
        inicio = scanner.next().charAt(0);

       
        copos[inicio - 65] = 1;

        for(int i = 0; i < n; i++){
            mov = scanner.nextInt();
            switch(mov){
                case 1:
                   
                    if(copos[0] == 1 || copos[1] == 1)
                        swap(copos, 0, 1);
                    break;
                case 2:
                    if(copos[1] == 1 || copos[2] == 1)
                        swap(copos, 1, 2);
                    break;
                case 3:
                    if(copos[0] == 1 || copos[2] == 1)
                        swap(copos, 0, 2);
                    break;
            }
        }

        if(copos[0] == 1)
            System.out.println("A");
        else if(copos[1] == 1)
            System.out.println("B");
        else
            System.out.println("C");
    }
}
