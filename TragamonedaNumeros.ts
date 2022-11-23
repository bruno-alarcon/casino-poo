import { Tragamonedas } from "./Tragamonedas";


export class TragamonedaNumeros extends Tragamonedas{



    constructor(){
        super()
        this.valor=120;
    }


    public getValor():number{
        return this.valor;
    }

    public jugar():boolean{

        let num1:number;
        let num2:number;
        let num3:number;
        let gano:boolean;
         
        num1=this.generarnumero(4,1);
        num2=this.generarnumero(4,1);
        num3=this.generarnumero(4,1);
  
        console.log("****************************************************");
        console.log("          " + "   |   " + "    |  " + "    |  ");
        console.log("          " + num1 + "  |   " + num2 +  "   |  " +num3 +  "   |  ");
        console.log("          " + "   |   " + "    |  " + "    |  ");
        gano=this.compararNumeros(num1,num2,num3);
        console.log("****************************************************");
        
        return gano;
       
  
  
  
  
  
  
     }
  


}


