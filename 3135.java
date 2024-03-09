import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        TreeMap<Integer, ArrayList<String>> d = new TreeMap<>();
        int size = scan.nextInt();
        scan.nextLine();

        for (int i = 0; i < size; i++) {
            String s = scan.nextLine();
            int len = s.length();
            if(d.containsKey(len)){ 
                d.get(len).add(s);
            }else{
                ArrayList<String> new_list = new ArrayList<>();
                new_list.add(s);
                d.put(len, new_list);
            }
        }

        ArrayList<ArrayList<String>> v = new ArrayList<>(d.values());
        while(true){
            try{
                int tam = v.size();
                if (tam == 0) break;
                ArrayList<String> a = new ArrayList<>();
                for (int i=0; i<tam; i++) {
                    a.add(v.get(i).get(0));
                    v.get(i).remove(0);
                }

                v.removeIf(ArrayList::isEmpty);
                System.out.println(String.join(", ", a));
            }catch(Exception e){
                break;
            }
        }
    }
}
