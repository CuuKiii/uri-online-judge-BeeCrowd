import java.util.Scanner;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String str;
        while(in.hasNext()) {
            str = in.next();
            if(isCorrect(str))
                System.out.println("correct");
            else
                System.out.println("incorrect");
        }
    }
    static boolean isCorrect(String expression){
        Stack<Character> stack = new Stack<>();
        for (char c : expression.toCharArray()) {
            if (c == '(')// abre
                stack.push(c);
            else if (c == ')') {// fecha se possivel
                if (!stack.isEmpty())// tem correspondente '<'
                    stack.pop();
                else // não tem correspondente, portanto incorreto
                    return false;
            }
        }
        if(!stack.isEmpty())// Sobrou ')'
            return false;
        // tudo certo
        return true;
    }
}
