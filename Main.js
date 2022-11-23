"use strict";
exports.__esModule = true;
var JuegoDeDados_1 = require("./JuegoDeDados");
var CaraOSeca_1 = require("./CaraOSeca");
var TragamonedaNumeros_1 = require("./TragamonedaNumeros");
var TragamonedaSignos_1 = require("./TragamonedaSignos");
var fs = require('fs');
var readlineSync = require('readline-sync');
var pGanadasTNumeros = 0;
var pGanadasTDados = 0;
var pGanadasTCaraOSeca = 0;
var pGanadasTSignos = 0;
var pPerdidasTNumeros = 0;
var pPerdidasTDados = 0;
var pPerdidasTCaraOSeca = 0;
var pPerdidasTSignos = 0;
var texto = "1- TRAGAMOONEDAS NUMEROS: EL JUGADOR GANARÁ SOLO SI LOS 3 NUMEROS FINALES COINCIDEN. \n 2- JUEGO DE DADOS: JUGARÁ 3 RONDAS CONTRA LA MESA EN EL CUAL CADA UNO LANZARÁ 2 DADOS. GANARÁ DICHA RONDA EL QUE AL SUMAR AMBOS DADOS OBTENGA UN NUMERO MAYOR , RESULTARA GANADOR DE LA PARTIDA EL LOGRE GANAR MAS RONDAS. \n 3- CARA O SECA: EL JUEGO TIPICO DE CARA O SECA, EL EL QUE EL USUARIO DEBERÁ ELEGIR ENTRE LAS 2 VARIANTES Y SI COINCIDE CON LA OPCION QUE SALGA EN LA MONEDA GANA. \n 4- TRAGAMONEDA SIGNOS: EL JUGADOR GANARÁ SOLO SI LOS 3 SIGNOS FINALES COINCIDEN. \n   ";
var txtHistorialTNumeros = "Partidas jugadas: 0: ";
var txtHistorialDados = "Partidas jugadas: 0 ";
var txtHistorialCaraOSeca = "Partidas jugadas: 0 ";
var txtHistorialTSignos = "Partidas jugadas: 0 ";
var apuestaRecarga;
var l1 = new TragamonedaNumeros_1.TragamonedaNumeros();
l1.crearArchivo("Historial de juego Tragamoneds Numeros.txt", txtHistorialTNumeros);
l1.crearArchivo("BIENVENIDA A CASINO.txt", texto);
var dados1 = new JuegoDeDados_1.JuegoDeDados();
dados1.crearArchivo("Historial de juego de dados.txt", txtHistorialDados);
var caraOSeca1 = new CaraOSeca_1.CaraOSeca();
caraOSeca1.crearArchivo("Historial de juego Cara o Seca.txt", txtHistorialCaraOSeca);
var tragamonedaSignos = new TragamonedaSignos_1.TragamonedaSignos();
tragamonedaSignos.crearArchivo("Historial de juego Tragamoneda Signos.txt", txtHistorialTSignos);
var gano;
var opcion = 0;
console.log("BIENVENIDO AL CASINO");
l1.leerArchivo("BIENVENIDA A CASINO.txt");
var apuesta = parseInt(readlineSync.question("INGRESE LA CANTIDAD DE DINERO QUE DESEE DEPOSITAR:  $"));
while (apuesta < caraOSeca1.getValor()) {
    console.log("PARA JUGAR CON NOSOTROS DEBE INGRESAR UNA CANTIDAD MAYOR A $" + caraOSeca1.getValor());
    apuesta = parseInt(readlineSync.question("INGRESE LA CANTIDAD DE DINERO QUE DESEE DEPOSITAR:  $"));
}
do {
    console.log("1- TRAGAMONEDAS VERSION NUMEROS. VALOR: $" + l1.getValor());
    console.log("2- JUEGO DE DADOS. VALOR: $" + dados1.getValor());
    console.log("3- CARA O SECA. VALOR: $" + caraOSeca1.getValor());
    console.log("4- TRAGAMONEDAS SIGNOS. VALOR: $" + tragamonedaSignos.getValor());
    console.log("5- RECARGAR DINERO");
    console.log("6- SALIR Y RETIRAR DINERO");
    opcion = parseInt(readlineSync.question("ELIJA LA OPCION QUE DESEE: "));
    while (opcion <= 0 || opcion > 6) {
        console.log("INGRESE UNA OPCION VALIDA");
        console.log("1- TRAGAMONEDAS VERSION NUMEROS. VALOR: $" + l1.getValor());
        console.log("2- JUEGO DE DADOS. VALOR: $" + dados1.getValor());
        console.log("3- CARA O SECA. VALOR $" + caraOSeca1.getValor());
        console.log("4- TRAGAMONEDAS SIGNOS. VALOR: $" + tragamonedaSignos.getValor());
        console.log("5- RECARGAR DINERO");
        console.log("6- SALIR Y RETIRAR DINERO");
        opcion = parseInt(readlineSync.question("ELIJA LA OPCION QUE DESEE: "));
    }
    if (opcion > 0 && opcion <= 4) {
        if (apuesta < caraOSeca1.getValor()) {
            console.log("Su saldo actual de $" + apuesta + " es insuficiente para jugar con nosotros.");
            console.log("1-RECARGAR DINERO");
            console.log("2-SALIR Y RETIRAR DINERO ");
            opcion = parseInt(readlineSync.question("ELIJA LA OPCION QUE DESEE: "));
            while (opcion < 0 || opcion > 2) {
                opcion = parseInt(readlineSync.question("ELIJA LA OPCION QUE DESEE: "));
            }
            if (opcion === 1)
                opcion = 5;
            else {
                opcion = 6;
            }
        }
    }
    switch (opcion) {
        case 1:
            if (apuesta >= l1.getValor()) {
                gano = l1.jugar();
                if (gano === true) {
                    console.log("Usted gano " + l1.getValor() * 2 + ". Ahora tiene un total de : $" + (apuesta += l1.getValor()));
                    l1.modificarArchivo("Historial de juego Tragamoneds Numeros.txt", "Partidas ganadas en el juego tragamonedas numeros : " + (pGanadasTNumeros = pGanadasTNumeros + 1) + " || Partidas Perdidas " + pPerdidasTNumeros);
                }
                else {
                    console.log("Usted perdió $" + l1.getValor() + " . Ahora tiene: $" + (apuesta -= l1.getValor()));
                    l1.modificarArchivo("Historial de juego Tragamoneds Numeros.txt", "Partidas perdidas en el juego tragamonedas Numeros : " + pGanadasTNumeros + " || Partidas Perdidas " + (pPerdidasTNumeros = pPerdidasTNumeros + 1));
                }
            }
            else {
                console.log("NO TIENE DINERO SUFICIENTE PARA JUGAR ESTE JUEGO");
            }
            break;
        case 2:
            if (apuesta >= dados1.getValor()) {
                gano = dados1.jugar();
                if (gano === true) {
                    console.log("Usted gano $" + dados1.getValor() * 2 + " . Ahora tiene un total de : $" + (apuesta += dados1.getValor()));
                    dados1.modificarArchivo("Historial de juego de dados.txt", "Partidas ganadas en el juego de dados : " + (pGanadasTDados = pGanadasTDados + 1) + " || Partidas Perdidas " + pPerdidasTDados);
                }
                else {
                    console.log("Usted perdio $" + dados1.getValor() + ". Ahora tiene: $" + (apuesta -= dados1.getValor()));
                    dados1.modificarArchivo("Historial de juego de dados.txt", "Partidas ganadas en el juego de dados : " + pGanadasTDados + " || Partidas Perdidas " + (pPerdidasTDados = pPerdidasTDados + 1));
                }
            }
            else {
                console.log("NO TIENE DINERO SUFICIENTE PARA JUGAR ESTE JUEGO");
            }
            break;
        case 3:
            if (apuesta >= caraOSeca1.getValor()) {
                gano = caraOSeca1.jugar();
                if (gano === true) {
                    console.log("Usted gano $ " + caraOSeca1.getValor() * 2 + " . Ahora tiene un total de : $" + (apuesta += caraOSeca1.getValor()));
                    caraOSeca1.modificarArchivo("Historial de juego Cara o Seca.txt", "Partidas ganadas en el juego cara o seca : " + (pGanadasTCaraOSeca = pGanadasTCaraOSeca + 1) + " || Partidas Perdidas " + pPerdidasTCaraOSeca);
                }
                else {
                    console.log("Usted perdio $" + caraOSeca1.getValor() + ". Ahora tiene un saldo de: $" + (apuesta -= caraOSeca1.getValor()));
                    caraOSeca1.modificarArchivo("Historial de juego Cara o Seca.txt", "Partidas ganadas en el juego cara o seca : " + pGanadasTCaraOSeca + " || Partidas Perdidas " + (pPerdidasTCaraOSeca = pPerdidasTCaraOSeca + 1));
                }
            }
            else {
                console.log("NO TIENE DINERO SUFICIENTE PARA JUGAR ESTE JUEGO");
            }
            break;
        case 4:
            if (apuesta >= tragamonedaSignos.getValor()) {
                gano = tragamonedaSignos.jugar();
                if (gano === true) {
                    console.log("Usted gano $" + tragamonedaSignos.getValor() * 2 + " . Ahora tiene un total de : $" + (apuesta += tragamonedaSignos.getValor()));
                    tragamonedaSignos.modificarArchivo("Historial de juego Tragamoneda Signos.txt", "Partidas ganadas en el juego tragamonedas signos : " + (pGanadasTSignos = pGanadasTSignos + 1) + " || Partidas Perdidas " + pPerdidasTSignos);
                }
                else {
                    console.log("Usted perdio $" + tragamonedaSignos.getValor() + ". Ahora tiene un saldo de: $" + (apuesta -= tragamonedaSignos.getValor()));
                    tragamonedaSignos.modificarArchivo("Historial de juego Tragamoneda Signos.txt", "Partidas ganadas en el juego tragamonedas signos : " + pGanadasTSignos + " || Partidas Perdidas " + (pPerdidasTSignos = pPerdidasTSignos + 1));
                }
            }
            else {
                console.log("NO TIENE DINERO SUFICIENTE PARA JUGAR ESTE JUEGO");
            }
            break;
        case 5:
            console.log("SALDO ACTUAL: " + apuesta);
            apuestaRecarga = parseInt(readlineSync.question("INGRESE LA CANTIDAD DE DINER  $"));
            console.log("RECARGA REALIZADA CON EXITO. AHORA SU SALDO ES DE $" + (apuesta = apuesta + apuestaRecarga));
            break;
        case 6:
            console.log("USTED ELIGIO SALIR DEL CASINO Y RETIRAR SU SALDO  TOTAL QUE ES : $" + apuesta);
            console.log("GRACIAS POR JUGAR CON NOSOTROS, VUELVA PRONTO");
            break;
        default:
            console.log("LA OPCION ELEGIDA NO ES VALIDA.");
            break;
    }
} while (opcion > 6 || opcion <= 5);
dados1.leerArchivo("Historial de juego de dados.txt");
caraOSeca1.leerArchivo("Historial de juego Cara o Seca.txt");
tragamonedaSignos.leerArchivo("Historial de juego Tragamoneda Signos.txt");
l1.leerArchivo("Historial de juego Tragamoneds Numeros.txt");
/* opcion!=4 */ 
