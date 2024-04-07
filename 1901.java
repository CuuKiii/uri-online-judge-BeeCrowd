import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        List<List<String>> matrix = new ArrayList<>();
        List<String> species = new ArrayList<>();

        for(int i = 0; i < n; i++){
            List<String> row = new ArrayList<>();
            String[] num = scanner.nextLine().split(" ");
            for(int l = 0; l < n; l++){
                row.add(num[l]);
            }
            matrix.add(row);
        }

        for(int o = 0; o < n * 2; o++){
            String[] input = scanner.nextLine().split(" ");
            int j = Integer.parseInt(input[0]);
            int k = Integer.parseInt(input[1]);
            String creature = matrix.get(j - 1).get(k - 1);
            if(!species.contains(creature)){
                species.add(creature);
            }
        }

        System.out.println(species.size());
    }
}
