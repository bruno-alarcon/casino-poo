"use strict";
exports.__esModule = true;
exports.CaraOSeca = void 0;
var fs = require('fs');
var readlineSync = require('readline-sync');
var CaraOSeca = /** @class */ (function () {
    function CaraOSeca() {
        this.valor = 250;
    }
    CaraOSeca.prototype.getValor = function () {
        return this.valor;
    };
    CaraOSeca.prototype.manipularArchivo = function (nombre, texto) {
        fs.writeFile(nombre, texto, function (error) {
            if (error)
                console.log("ERROR");
            else
                console.log("Se creo el archivo");
        });
    };
    CaraOSeca.prototype.crearArchivo = function (nombre, texto) {
        this.manipularArchivo(nombre, texto);
    };
    CaraOSeca.prototype.modificarArchivo = function (nombre, texto) {
        this.manipularArchivo(nombre, texto);
    };
    CaraOSeca.prototype.leerArchivo = function (path) {
        fs.readFile(path, function (error, texto) {
            if (error)
                console.log("ERROR");
            else
                console.log(texto.toString());
        });
    };
    CaraOSeca.prototype.tirarMoneda = function () {
        return Math.floor(Math.random() * (3 - 2) + 2);
    };
    CaraOSeca.prototype.jugar = function () {
        var moneda = this.tirarMoneda();
        var gano = false;
        console.log("JUEGO CARA O SECA. OPCIONES DISPONIBLES: ");
        console.log("1- CARA");
        console.log("2- CRUZ");
        var opcionElegida = parseInt(readlineSync.question("ELIJA LA OPCION QUE DESEE: "));
        opcionElegida += 1;
        if (moneda === 2) {
            console.log("HA SALIDO CARA");
        }
        else {
            console.log("HA SALIDO CRUZ");
        }
        if (moneda == opcionElegida) {
            gano = true;
            return gano;
        }
        else {
            gano = false;
            return gano;
        }
        /*       if (gano === true) {
                 console.log("Usted gano, ahora tiene: $" + (apuesta=apuestaAux * 2));
        
              } else {
                 console.log("USTED PERDIO, AHORA TIENE: $" + (apuesta-=apuestaAux));
        
        
              } */
    };
    return CaraOSeca;
}());
exports.CaraOSeca = CaraOSeca;
