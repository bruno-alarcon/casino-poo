var fs = require('fs');
let readlineSync= require('readline-sync');


export class CaraOSeca{

   protected valor:number= 150;

    constructor(){

}

public getValor():number{
   return this.valor;
}

private manipularArchivo(nombre:string,texto:string){

    fs.writeFile(nombre,texto, error =>{
        if(error)
         console.log("ERROR");

    });

 }



 public crearArchivo(nombre:string,texto:string){

    this.manipularArchivo(nombre,texto);
 
 }

 public modificarArchivo(nombre:string,texto:string){
    this.manipularArchivo(nombre,texto);
 
 }

 public leerArchivo(path:string){

    fs.readFile(path,(error,texto) =>{
       if(error)
       console.log("ERROR");
       else
        console.log(texto.toString());
 
 
 
    })
    }


    private tirarMoneda():number{
      return Math.floor(Math.random() * (2-0) + 1) ;
  
   }


    public jugar():boolean{

      let moneda:number;
      let gano :boolean=false;
      console.log("JUEGO CARA O SECA. OPCIONES DISPONIBLES: ");
      console.log("1- CARA");
      console.log("2- SECA");
      let opcionElegida=parseInt(readlineSync.question("ELIJA LA OPCION QUE DESEE: "));
      moneda = this.tirarMoneda();
  
      if(moneda === 1){
         
         console.log("HA SALIDO CARA");
         

      }
      else{
         console.log("HA SALIDO SECA");
         
      }

      if(moneda == opcionElegida){
         gano= true;
         return gano;
      }else{
         gano=false;
         return gano;
      }


/*       if (gano === true) {
         console.log("Usted gano, ahora tiene: $" + (apuesta=apuestaAux * 2));

      } else {
         console.log("USTED PERDIO, AHORA TIENE: $" + (apuesta-=apuestaAux));


      } */


   






    }





}
