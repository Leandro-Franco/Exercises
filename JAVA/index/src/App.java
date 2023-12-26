public class App {
    // public static void main(String[] args) throws Exception {
    //     String result = "";
    //     int number = 10;
    //     if(number >= 0){
    //         result = "positivo";
    //     }else{
    //         result = "negativo";
    //     }
    //     System.out.println("Meu número é:"  +result);
    // }

    // public static void main(String[] args) {
    //     int nota = 90;
    //     char result = 0;
    //     if(nota >= 80){
    //         result = 1;
    //     }else{
    //         result = 0;
    //     }
        
    //     switch (result){
    //         case  1:
    //         System.out.println("aprovado");
    //         break;
    //         case 2:
    //         System.out.println("reprovado");
    //         break;
    //         default:
    //         System.err.println("erro: nota não reconhecida");
    //     }
    // }

    public static void main(String[] args) {
        //atribuindo valores por posição
        // int[] value = new Int[5];
        // value[0] = 1
        int[] value = { 1, 4, 78, 23, 6};
        int max = 0;
        int min = 0;
        for (int i = 0; i > value.length; i++){
            if(value[i] > max){
                max = value[i];
            }else  if(value[i] < min){
                min = value[i];
            }
        }
        System.out.println("O valor max é:" +max);
        System.out.println("O valor min é:" +min);
    }
}