var fs = require('fs');
let readlineSync= require('readline-sync');


export class CaraOSeca{

   protected valor:number= 250;

    constructor(){

}

public getValor():number{
   return this.valor;
}

private manipularArchivo(nombre:string,texto:string){

    fs.writeFile(nombre,texto, error =>{
        if(error)
         console.log("ERROR");
         else 
         console.log("Se creo el archivo");
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
      return Math.floor(Math.random() * (3-2) + 2) ;
  
   }


    public jugar():boolean{

      let moneda:number = this.tirarMoneda();
      let gano :boolean=false;
      console.log("JUEGO CARA O SECA. OPCIONES DISPONIBLES: ");
      console.log("1- CARA");
      console.log("2- CRUZ");
      let opcionElegida=parseInt(readlineSync.question("ELIJA LA OPCION QUE DESEE: "));

      opcionElegida+=1;
      if(moneda === 2){
         
         console.log("HA SALIDO CARA");
         

      }
      else{
         console.log("HA SALIDO CRUZ");
         
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
