var fs = require('fs');



export class Tragamonedas{

 protected  n1:number;
 protected n2:number;
 protected n3:number;
 


 constructor(){
  

 }



 public generarnumero(numMax:number,numMin:number):number{
    return Math.floor(Math.random() * (numMax-numMin) + numMin) ;

 }




 public compararNumeros(n1:number,n2:number,n3:number):boolean{
    let gano: boolean = false;

    if(n1===n2 && n2===n3){
        gano = true;
        return gano;
    }
    else {
        return gano;
    }
    
   
 }


 public manipularArchivo(nombre:string,texto:string){

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




}