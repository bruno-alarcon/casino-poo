
import { JuegoDeDados } from "./JuegoDeDados";
import { CaraOSeca } from "./CaraOSeca";
import { TragamonedaNumeros } from "./TragamonedaNumeros";
import {TragamonedaSignos} from "./TragamonedaSignos";

var fs = require('fs');


let readlineSync = require('readline-sync');

let pGanadasTNumeros:number = 0;
let pGanadasTDados:number= 0 ;
let pGanadasTCaraOSeca:number=0;
let pGanadasTSignos:number=0;

let pPerdidasTNumeros:number=0;
let pPerdidasTDados:number=0;
let pPerdidasTCaraOSeca:number=0;
let pPerdidasTSignos:number=0;




let texto: string = "Reglamento de Juego Tragamonedas " ;
let txtHistorialTNumeros:string = "Partidas ganadas: ";
let txtHistorialDados:string = "Partidas ganadas: " ;
let txtHistorialCaraOSeca:string = "Partidas ganadas: " ;
let txtHistorialTSignos:string = "Partidas ganadas: " ;

let apuestaRecarga:number;


let l1 = new TragamonedaNumeros();
l1.crearArchivo("Historial de juego Tragamoneds Numeros.txt", txtHistorialTNumeros);
let d1 = new JuegoDeDados();
d1.crearArchivo("Historial de juego Juego de dados.txt", txtHistorialDados);
let c1 = new CaraOSeca();
c1.crearArchivo("Historial de juego Cara o Seca.txt", txtHistorialCaraOSeca);
let tS = new TragamonedaSignos();
tS.crearArchivo("Historial de juego Tragamoneda Signos.txt", txtHistorialTSignos);
let gano: boolean;



let opcion: number = 0;



console.log("BIENVENIDO AL CASINO");

let apuesta = parseInt(readlineSync.question("INGRESE LA CANTIDAD DE DINERO QUE DESEE DEPOSITAR:  $"));
while(apuesta<110){
   console.log("PARA JUGAR CON NOSOTROS DEBE INGRESAR UNA CANTIDAD MAYOR A $110.")
    apuesta = parseInt(readlineSync.question("INGRESE LA CANTIDAD DE DINERO QUE DESEE DEPOSITAR:  $"));


}
let apuestaAux: number = 0;
l1.leerArchivo("Reglamento Tragamonedas Numeros.txt");



do {



   console.log("1- TRAGAMONEDAS VERSION NUMEROS. VALOR: $120");
   console.log("2- JUEGO DE DADOS. VALOR: $210");
   console.log("3- CARA O SECA. VALOR: $250");
   console.log("4- TRAGAMONEDAS SIGNOS. VALOR: $110");
   console.log("5- SALIR Y RETIRAR DINERO");

   opcion = parseInt(readlineSync.question("ELIJA LA OPCION QUE DESEE: "));

   
   if(opcion > 0 && opcion <= 4){
      if (apuesta <110) {
         console.log("Su saldo actual de $" + apuesta + " es insuficiente para jugar con nosotros.")
         opcion=200;
         
      }
   
   }


/*    if(apuesta<100){
      console.log("NO TIENE SUFUCIENTE DINERO PARA JUGAR EN NUESTRO CASINO")
      opcion==7
   } */
   switch (opcion) {


      case 1:
      if(apuesta>=l1.getValor()){
         gano = l1.jugar();
         if (gano === true) {
            console.log("Usted gano . Ahora tiene un total de : $" + (apuesta += l1.getValor()));
            l1.modificarArchivo("Historial de juego Tragamoneds Numeros.txt", "Partidas ganadas en el juego tragamonedas numeros : " + (pGanadasTNumeros +1)+ " || Partidas Perdidas " + pPerdidasTNumeros );

         } else {
            console.log("USTED PERDIO, AHORA TIENE: $" + (apuesta-=l1.getValor()));
            l1.modificarArchivo("Historial de juego Tragamoneds Numeros.txt", "Partidas ganadas en el juego tragamonedas Numeros : " + pGanadasTNumeros  +" || Partidas Perdidas " + (pPerdidasTNumeros +1) );

         }
      }else{
         console.log("NO TIENE DINERO SUFICIENTE PARA JUGAR ESTE JUEGO");
      }
         break;

      case 2:
         if(apuesta>=d1.getValor()){
         gano = d1.jugar();

         if (gano === true) {
            console.log("Usted gano. Ahora tiene un total de : $" + (apuesta += d1.getValor()));
            d1.modificarArchivo("Historial de Juego de dados.txt" ,"Partidas ganadas en el juego de dados : " + (pGanadasTDados +1)+ " || Partidas Perdidas " + pPerdidasTDados );
         } else {
            console.log("Usted perdio, ahora tiene: $" + (apuesta-=d1.getValor()));
            d1.modificarArchivo("Historial de Juego de dados.txt" ,"Partidas ganadas en el juego de dados : " + pGanadasTDados + " || Partidas Perdidas " + (pPerdidasTDados+1) );



         }
      }else{
         console.log("NO TIENE DINERO SUFICIENTE PARA JUGAR ESTE JUEGO");
      }

         break;



      case 3:
      
         if(apuesta>=c1.getValor()){
         gano = c1.jugar();

         if (gano === true) {
            console.log("Usted gano. Ahora tiene un total de : $" + (apuesta +=c1.getValor()));
            c1.modificarArchivo("Historial de juego Cara o Seca.txt" , "Partidas ganadas en el juego cara o seca : " + (pGanadasTCaraOSeca +1)+ " || Partidas Perdidas " + pPerdidasTCaraOSeca);
         
         } else {
            console.log("Usted perdio, ahora tiene un saldo de: $" + (apuesta-=c1.getValor()));
            c1.modificarArchivo("Historial de juego Cara o Seca.txt" , "Partidas ganadas en el juego cara o seca : " + pGanadasTCaraOSeca + " || Partidas Perdidas " + (pPerdidasTCaraOSeca+1));



         }
      }else{
         console.log("NO TIENE DINERO SUFICIENTE PARA JUGAR ESTE JUEGO");
      }



         break;

         
      case 4:

      if(apuesta>=tS.getValor()){

         gano = tS.jugar();

         if (gano === true) {
            console.log("Usted gano. Ahora tiene un total de : $" + (apuesta += tS.getValor()));
            d1.modificarArchivo("Historial de juego Tragamoneda Signos.txt","Partidas ganadas en el juego tragamonedas signos : " + (pGanadasTSignos +1)+ " || Partidas Perdidas " + pPerdidasTSignos );
            
         } else {
            console.log("Usted perdio, ahora tiene un saldo de: $" + (apuesta-=tS.getValor()));
            d1.modificarArchivo("Historial de juego Tragamoneda Signos.txt","Partidas ganadas en el juego tragamonedas signos : " + pGanadasTSignos + " || Partidas Perdidas " + (pPerdidasTSignos+1) );
            


         }
      }else{
         console.log("NO TIENE DINERO SUFICIENTE PARA JUGAR ESTE JUEGO");
      }



         break;


         case 5:
            console.log("SALDO ACTUAL: " + apuesta);
            apuestaRecarga = parseInt(readlineSync.question("INGRESE LA CANTIDAD DE DINER  $"));
            console.log("RECARGA REALIZADA CON EXITO. AHORA SU SALDO ES DE $" + (apuesta=apuesta+apuestaRecarga))
   
   
         break;

      case 6:
         console.log("USTED ELIGIO SALIR DEL CASINO Y RETIRAR SU SALDO  TOTAL QUE ES : $" + apuesta);
         console.log("GRACIAS POR JUGAR CON NOSOTROS, VUELVA PRONTO");

         break;





      default:
         console.log("LA OPCION ELEGIDA NO ES VALIDA.");
         break;

   }


} while (opcion > 6 || opcion <= 4 && apuesta>110);

if(apuesta<110){
   console.log("Su saldo de $" + apuesta +". Es insuficiente para jugar con nosotros.");
}

/* d1.leerArchivo("Historial de juego Tragamoneda Signos.txt");
c1.leerArchivo("Historial de juego Cara o Seca.txt");
tS.leerArchivo("Historial de juego Tragamoneda Signos.txt");
l1.leerArchivo("Historial de juego Tragamoneds Numeros.txt");
 */


/* opcion!=4 */