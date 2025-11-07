import java.io.*;
import java.util.*;

public class Main {
 public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<String> rawLines = new ArrayList<>();
        String line;
        while ((line = br.readLine()) != null) {
            rawLines.add(line);
        }

        List<int[]> lines = new ArrayList<>();
        for (String l : rawLines) {
            if (l == null || l.trim().isEmpty()) {
                lines.add(new int[0]);
            } else {
                String[] parts = l.trim().split("\\s+");
                int[] nums = new int[parts.length];
                for (int i = 0; i < parts.length; i++) {
                    nums[i] = Integer.parseInt(parts[i]);
                }
                lines.add(nums);
            }
        }

        int N = 0;
        int M = 0;
        if (lines.size() > 0 && lines.get(0).length > 0) {
            N = lines.get(0)[0];
        }
        if (lines.size() > 2 && lines.get(2).length > 0) {
            M = lines.get(2)[0];
        }

        int[] inQueue = new int[0];
        int[] outQueue = new int[0];
        if (lines.size() > 1) {
            int[] arr = lines.get(1);
            int len = Math.min(N, arr.length);
            inQueue = Arrays.copyOf(arr, len);
        }
        if (lines.size() > 3) {
            int[] arr = lines.get(3);
            int len = Math.min(M, arr.length);
            outQueue = Arrays.copyOf(arr, len);
        }

        Set<Integer> outSet = new HashSet<>();
        for (int v : outQueue) {
            outSet.add(v);
        }

        StringBuilder sb = new StringBuilder();
        boolean first = true;
        for (int v : inQueue) {
            if (!outSet.contains(v)) {
                if (!first) sb.append(" ");
                sb.append(v);
                first = false;
            }
        }

        System.out.println(sb.toString());
    }
}
