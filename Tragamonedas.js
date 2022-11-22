"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
var fs = require('fs');
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas() {
    }
    Tragamonedas.prototype.generarnumero = function (numMax, numMin) {
        return Math.floor(Math.random() * (numMax - numMin) + numMin);
    };
    Tragamonedas.prototype.compararNumeros = function (n1, n2, n3) {
        var gano = false;
        if (n1 === n2 && n2 === n3) {
            gano = true;
            return gano;
        }
        else {
            return gano;
        }
    };
    Tragamonedas.prototype.manipularArchivo = function (nombre, texto) {
        fs.writeFile(nombre, texto, function (error) {
            if (error)
                console.log("ERROR");
        });
    };
    Tragamonedas.prototype.crearArchivo = function (nombre, texto) {
        this.manipularArchivo(nombre, texto);
    };
    Tragamonedas.prototype.modificarArchivo = function (nombre, texto) {
        this.manipularArchivo(nombre, texto);
    };
    Tragamonedas.prototype.leerArchivo = function (path) {
        fs.readFile(path, function (error, texto) {
            if (error)
                console.log("ERROR");
            else
                console.log(texto.toString());
        });
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
