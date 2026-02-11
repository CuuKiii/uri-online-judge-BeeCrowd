import java.io.*;
import java.util.StringTokenizer;

public class Main {
    static BufferedReader br;
    static PrintWriter pw;
    static StringTokenizer st;

    public static void main(String[] args) throws IOException {
        br = new BufferedReader(new InputStreamReader(System.in));
        pw = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));

        String line;
        double[] p1 = new double[2];
        double[] dir = new double[2];

        while ((line = br.readLine()) != null) {
            if (line.trim().isEmpty()) continue;
            st = new StringTokenizer(line);

            double X = Double.parseDouble(st.nextToken());
            double Y = Double.parseDouble(st.nextToken());
            double Dx = Double.parseDouble(st.nextToken());
            double Dy = Double.parseDouble(st.nextToken());
            double A = Double.parseDouble(st.nextToken());
            double B = Double.parseDouble(st.nextToken());

            // Primeira interseção
            findIntersection(X, Y, Dx, Dy, A, B, p1);
            pw.printf("%.3f %.3f%n", p1[0], p1[1]);

            // Reflexão
            reflect(Dx, Dy, p1[0], p1[1], A, B, dir);

            // Segunda interseção
            findIntersection(p1[0], p1[1], dir[0], dir[1], A, B, p1);
            pw.printf("%.3f %.3f%n", p1[0], p1[1]);
        }

        pw.flush();
        pw.close();
        br.close();
    }

    // Interseção da reta com a elipse
    static void findIntersection(double X, double Y, double Dx, double Dy,
                                 double A, double B, double[] result) {
        double invA2 = 1.0 / (A * A);
        double invB2 = 1.0 / (B * B);

        double a = Dx*Dx*invA2 + Dy*Dy*invB2;
        double b = 2.0 * (X*Dx*invA2 + Y*Dy*invB2);
        double c = X*X*invA2 + Y*Y*invB2 - 1.0;

        double delta = b*b - 4.0*a*c;
        double sqrtDelta = Math.sqrt(delta);

        double t1 = (-b + sqrtDelta) / (2.0*a);
        double t2 = (-b - sqrtDelta) / (2.0*a);

        double eps = 1e-9;
        double t = Double.MAX_VALUE;
        if (t1 > eps) t = Math.min(t, t1);
        if (t2 > eps) t = Math.min(t, t2);

        result[0] = X + Dx*t;
        result[1] = Y + Dy*t;
    }

    // Reflexão do vetor na elipse
    static void reflect(double Dx, double Dy, double x, double y,
                        double A, double B, double[] result) {
        double nx = 2.0*x/(A*A);
        double ny = 2.0*y/(B*B);

        double dot = Dx*nx + Dy*ny;
        double norm = nx*nx + ny*ny;

        double rx = Dx - 2.0*dot/norm * nx;
        double ry = Dy - 2.0*dot/norm * ny;

        double invLenR = 1.0 / Math.sqrt(rx*rx + ry*ry);
        result[0] = rx * invLenR;
        result[1] = ry * invLenR;
    }
}
