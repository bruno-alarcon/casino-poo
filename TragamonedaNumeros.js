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
exports.TragamonedaNumeros = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var TragamonedaNumeros = /** @class */ (function (_super) {
    __extends(TragamonedaNumeros, _super);
    function TragamonedaNumeros() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valor = 120;
        return _this;
    }
    TragamonedaNumeros.prototype.getValor = function () {
        return this.valor;
    };
    TragamonedaNumeros.prototype.jugar = function () {
        var num1;
        var num2;
        var num3;
        var gano;
        num1 = this.generarnumero(4, 1);
        num2 = this.generarnumero(4, 1);
        num3 = this.generarnumero(4, 1);
        console.log("****************************************************");
        console.log("          " + "   |   " + "    |  " + "    |  ");
        console.log("          " + num1 + "  |   " + num2 + "   |  " + num3 + "   |  ");
        console.log("          " + "   |   " + "    |  " + "    |  ");
        gano = this.compararNumeros(num1, num2, num3);
        console.log("****************************************************");
        return gano;
    };
    return TragamonedaNumeros;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedaNumeros = TragamonedaNumeros;
