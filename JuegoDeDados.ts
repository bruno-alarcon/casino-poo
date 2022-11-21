var fs = require('fs');

export class JuegoDeDados{

    protected dado1Jugador:number;
    protected dado2Jugador:number;
    protected dado1Mesa:number;
    protected dado2Mesa:number;
    protected valor:number=210;



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

    private tirarDados():number{
        return Math.floor(Math.random() * (6-1) + 1) ;
    
     }




     public jugar():boolean{

        let gano:boolean=false;
        let rondasactuales:number=0;
        let rondasAJugarse:number=3;
        let rondasJugador:number=0;
        let rondasMesa:number=0;
        let totalDadosJugador:number=0;
        let totalDadosMesa:number=0;
        let rDesempate:number=0;

        while(rondasactuales<rondasAJugarse){

            this.dado1Jugador= this.tirarDados();
            this.dado2Jugador = this.tirarDados();
            this.dado1Mesa = this.tirarDados();
            this.dado2Mesa=this.tirarDados();

            
            totalDadosJugador=this.dado1Jugador+this.dado2Jugador;
            totalDadosMesa=this.dado1Mesa+this.dado2Mesa;
            console.log("Resultado de los dados del jugador:[" + this.dado1Jugador+" , "+this.dado2Jugador + "] Total : " + totalDadosJugador);
            console.log("Resultado de los dados de la mesa:[" + this.dado1Mesa+" , " + this.dado2Mesa + "] Total : " + totalDadosMesa);

            if(totalDadosJugador>totalDadosMesa){
                console.log("El jugador gano la ronda")
                rondasJugador+=1;
                
                

            }else if(totalDadosMesa===totalDadosJugador){
                console.log("Hubo un empate. Se jugará otra ronda");
                rDesempate=1;
            }else{
                console.log("La mesa gana la ronda");
                rondasMesa+=1;
            }

            rondasactuales +=1;
            if(rDesempate==1){
                rondasactuales-=1;
                rDesempate =0;
            }

        }

        if(rondasJugador>rondasMesa){
            console.log("EL JUGADOR GANA LA PARTIDA");
             gano=true;
             return gano;
             
            }else{
                console.log("LA MESA GANA LA PARTIDA")
                return gano;
            }

/* 
            if (gano === true) {
                console.log("Usted gano, ahora tiene: $" + (apuesta=apuestaAux * 2));
    
             } else {
                console.log("USTED PERDIO, AHORA TIENE: $" + (apuesta-=apuestaAux));
    
    
             }
 */














     }
    






}