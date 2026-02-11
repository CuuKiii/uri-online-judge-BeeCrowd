public class Main {
    public static void main(String[] args) {
        double i = 0.0;

        while (i <= 2.0 + 1e-9) { 
            double j = i + 1.0;
            for (int k = 0; k < 3; k++) {
                System.out.println("I=" + format(i) + " J=" + format(j));
                j += 1.0;
            }
            i += 0.2;
        }
    }

    
    private static String format(double x) {
        
        if (Math.abs(x - Math.round(x)) < 1e-9) {
            return String.format("%.0f", x);
        } else {
            return String.format("%.1f", x);
        }
    }
}
