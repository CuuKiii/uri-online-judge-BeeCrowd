import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int codigo;
        double qtd;
        Scanner sc = new Scanner(System.in);
        codigo = sc.nextInt();
        qtd = sc.nextDouble();
        if(codigo == 1){
            System.out.println(String.format("Total: R$ %.2f" , (qtd*4.0)));
           }
           else if(codigo == 2){
            System.out.println(String.format("Total: R$ %.2f" , (qtd*4.5)));
           }
           else if(codigo == 3){
            System.out.println(String.format("Total: R$ %.2f" , (qtd*5.0)));
           }
           else if(codigo == 4){
            System.out.println(String.format("Total: R$ %.2f" , (qtd*2.0)));
           }
           else if(codigo == 5){
            System.out.println(String.format("Total: R$ %.2f" , (qtd*1.5)));
           }
        sc.close();
    }
}
