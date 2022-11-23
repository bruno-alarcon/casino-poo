"use strict";
exports.__esModule = true;
exports.JuegoDeDados = void 0;
var fs = require('fs');
var JuegoDeDados = /** @class */ (function () {
    function JuegoDeDados() {
        this.valor = 300;
    }
    JuegoDeDados.prototype.getValor = function () {
        return this.valor;
    };
    JuegoDeDados.prototype.manipularArchivo = function (nombre, texto) {
        fs.writeFile(nombre, texto, function (error) {
            if (error)
                console.log("ERROR");
        });
    };
    JuegoDeDados.prototype.crearArchivo = function (nombre, texto) {
        this.manipularArchivo(nombre, texto);
    };
    JuegoDeDados.prototype.modificarArchivo = function (nombre, texto) {
        this.manipularArchivo(nombre, texto);
    };
    JuegoDeDados.prototype.leerArchivo = function (path) {
        fs.readFile(path, function (error, texto) {
            if (error)
                console.log("ERROR");
            else
                console.log(texto.toString());
        });
    };
    JuegoDeDados.prototype.tirarDados = function () {
        return Math.floor(Math.random() * (6 - 1) + 1);
    };
    JuegoDeDados.prototype.jugar = function () {
        var gano = false;
        var rondasactuales = 0;
        var rondasAJugarse = 3;
        var rondasJugador = 0;
        var rondasMesa = 0;
        var totalDadosJugador = 0;
        var totalDadosMesa = 0;
        var rDesempate = 0;
        while (rondasactuales < rondasAJugarse) {
            this.dado1Jugador = this.tirarDados();
            this.dado2Jugador = this.tirarDados();
            this.dado1Mesa = this.tirarDados();
            this.dado2Mesa = this.tirarDados();
            totalDadosJugador = this.dado1Jugador + this.dado2Jugador;
            totalDadosMesa = this.dado1Mesa + this.dado2Mesa;
            console.log("Resultado de los dados del jugador:[" + this.dado1Jugador + " , " + this.dado2Jugador + "] Total : " + totalDadosJugador);
            console.log("Resultado de los dados de la mesa:[" + this.dado1Mesa + " , " + this.dado2Mesa + "] Total : " + totalDadosMesa);
            if (totalDadosJugador > totalDadosMesa) {
                console.log("El jugador gano la ronda");
                rondasJugador += 1;
            }
            else if (totalDadosMesa === totalDadosJugador) {
                console.log("Hubo un empate. Se jugará otra ronda");
                rDesempate = 1;
            }
            else {
                console.log("La mesa gana la ronda");
                rondasMesa += 1;
            }
            rondasactuales += 1;
            if (rDesempate == 1) {
                rondasactuales -= 1;
                rDesempate = 0;
            }
        }
        if (rondasJugador > rondasMesa) {
            console.log("EL JUGADOR GANA LA PARTIDA");
            gano = true;
            return gano;
        }
        else {
            console.log("LA MESA GANA LA PARTIDA");
            return gano;
        }
        /*
                    if (gano === true) {
                        console.log("Usted gano, ahora tiene: $" + (apuesta=apuestaAux * 2));
            
                     } else {
                        console.log("USTED PERDIO, AHORA TIENE: $" + (apuesta-=apuestaAux));
            
            
                     }
         */
    };
    return JuegoDeDados;
}());
exports.JuegoDeDados = JuegoDeDados;
