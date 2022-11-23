import { Tragamonedas } from "./Tragamonedas";


export class TragamonedaSignos extends Tragamonedas{


    constructor(){
       super()
       this.valor=110;
    }


    public getValor():number{
        return this.valor;

    }
public asignarSimbolos(num:number):string{
    let simbolo:string= "";
    switch(num){

        case 1:
            simbolo="-";
            break;


        case 2:
            simbolo = "+"
            break;

        case 3: 
        simbolo="*"


        case 4:
            simbolo = "#"
            break;

        default:
            break;

    }


    return simbolo;

    

}



    public jugar():boolean{

        let num1:number;
        let num2:number;
        let num3:number;
        let gano:boolean;
         
        num1=this.generarnumero(3,1);
        num2=this.generarnumero(3,1);
        num3=this.generarnumero(3,1);

        gano=this.compararNumeros(num1,num2,num3);
        let simbolo1=this.asignarSimbolos(num1);
        let simbolo2=this.asignarSimbolos(num2);
        let simbolo3=this.asignarSimbolos(num3);
  
        console.log("****************************************************");
        console.log("          " + "   |   " + "    |  " + "    |  ");
        console.log("          " + simbolo1 + "  |   " + simbolo2 +  "   |  " +simbolo3 +  "   |  ");
        console.log("          " + "   |   " + "    |  " + "    |  ");
        
        console.log("****************************************************");
    
        return gano;
     
  
  
  
  
  
  
     }
  
}