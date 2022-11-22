"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TragamonedaSignos = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var TragamonedaSignos = /** @class */ (function (_super) {
    __extends(TragamonedaSignos, _super);
    function TragamonedaSignos() {
        var _this = _super.call(this) || this;
        _this.valor = 110;
        return _this;
    }
    TragamonedaSignos.prototype.getValor = function () {
        return this.valor;
    };
    TragamonedaSignos.prototype.asignarSimbolos = function (num) {
        var simbolo = "";
        switch (num) {
            case 1:
                simbolo = "-";
                break;
            case 2:
                simbolo = "+";
                break;
            case 3:
                simbolo = "*";
            case 4:
                simbolo = "#";
                break;
            default:
                break;
        }
        return simbolo;
    };
    TragamonedaSignos.prototype.jugar = function () {
        var num1;
        var num2;
        var num3;
        var gano;
        num1 = this.generarnumero(3, 1);
        num2 = this.generarnumero(3, 1);
        num3 = this.generarnumero(3, 1);
        gano = this.compararNumeros(num1, num2, num3);
        var simbolo1 = this.asignarSimbolos(num1);
        var simbolo2 = this.asignarSimbolos(num2);
        var simbolo3 = this.asignarSimbolos(num3);
        console.log("****************************************************");
        console.log("          " + "   |   " + "    |  " + "    |  ");
        console.log("          " + simbolo1 + "  |   " + simbolo2 + "   |  " + simbolo3 + "   |  ");
        console.log("          " + "   |   " + "    |  " + "    |  ");
        console.log("****************************************************");
        return gano;
    };
    return TragamonedaSignos;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedaSignos = TragamonedaSignos;
