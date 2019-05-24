//Hola mundo en la consola de javascript
console.log("Hello World"); 



//Hola mundo en ventana con javascript
/*alert("Hello World");*/



//Hola mundo en error con javascript
console.error("Error de Mentiras");



//Hola mundo en la pagina
document.write("<h2 style='color:blue; weight:bold;'>Hello World</h2>"); 



//Tipos de Datos con JavaScript
/*
    int 
    boolean
    double
    object
    null
    undefined
    string"
*/



//object o objeto {clave":valor}
var persona = {
    "username":'Savitar97',
    "score":'7.4',
    "hours":14,
    "professional":true
}
document.write("<h2>Datos de una persona en este caso este es un Objeto</h2>")
document.write("<b>Nombre Persona: </b>" + persona.username + "<br>");
document.write("<b>Puntuacion Jugador: </b>" + persona.score + "<br>");
document.write("<b>Rango de Jugador: </b>" + persona.professional + "<br>");
document.write("<b>Horas Jugadas Al Dia: </b>" + persona.hours + "<br>")


var numero1 = 1;
var bool = true;
var double = 3.22222;
const name = "Bryan Ariel Sanchez Anariba";
const pi = 3.141516;



//FUNCIONES CON JAVASCRIPT
function sumar_numeros(a,b){
    return a + b;
}
function restar_numeros(a,b){
    return a - b;
}
function multiplicar_numeros(a,b){
    var multiplicacion = a * b;
    return multiplicacion
}
function dividir_numeros(a,b){
    if(b==0){
        document.write("No Se puede Dividir por 0");
    }else{
        var division = a / b;
        document.write("La division entre dos numeros es: " + division + "<br>");
    }
}
document.write("<br><br><h2>ESTAS SON FUNCIONES</h2>")
document.write("Funcion que suma dos numeros: " + sumar_numeros(10,5) + "<br>");
document.write("Funcion que resta dos numeros: " + restar_numeros(10,5) + "<br>");
document.write("Funcion que multiplica dos numeros: " + multiplicar_numeros(10,5) + "<br>");
document.write("Nombre con constante: " + name + "<br>")
//name = "pepe"; no cambia y tira un error en el console
document.write("Nombre con constante: " + name + "<br>")
document.write("Pi con constante: " + pi + "<br>")
dividir_numeros(10,5);



//Bucle for
document.write("<br><h2>Bucle FOR</h2>");
document.write("***************************************************************************************<br>");
for(var i = 0; i<10 ; i++){
    document.write(i + "<br>");
}
document.write("***************************************************************************************<br>");
for(var i = 0; i<10 ; i++){
    document.write(i*i + "<br>");
}
document.write("***************************************************************************************<br>");


//Bucle while
document.write("<br><h2>Bucle WHILE</h2>");
var i = 0;
while(i <= 10){
    document.write("El valor de i es: " + i + "<br>")
    i++;
}
document.write("***************************************************************************************<br>");
var k = 0;
while(k <= 10){
    document.write("El valor de i * i es: " + k*k + "<br>");
    k = k + 1;
}
document.write("***************************************************************************************<br>");



//camelCase ========> userName , nombrePersona , nombreCliente , datosPersona

/*----------------------------------------PROCESAR DATOS CON JAVASCRIPT---------------------------------------- */
let primerNumero = 100 , segundoNumero = 200;
let resultado = primerNumero + segundoNumero;
let firstName = "Bryan";
let secondName = " Ariel";
let completeName = firstName + secondName;
document.write("Nombre Sacado y pegado de dos variables: " + completeName + "<br>");
document.write("La suma es: " + resultado + "<br>");



/*-------------------------------- comparando una clave en una cuenta ------------------------*/
let clave = "bryan123";
let input = "bryan123";
let result = clave == input;
if(result){
    document.write("La clave es igual al input ...... " + result + "<br>");
}else{
    document.write("La clave no es igual al input ...... " + result + "<br>");
}



//CONDICIONAL SWITCH}
var tarjeta = "credit card";
switch(tarjeta){
    case "debit card":
        document.write("You are used a debit card you can to pay with 30 % of descuent.....");
    break;
    case "credit card":
        document.write("Sorry but you do not have a benefits with your card.......");
    break;
    default:
        document.write("No cards select....." + "<br>");
    break;
}

document.write("<h1>Mostrando 20 veses un numero con while</h1><br>");
count = 20;
i = 0
while(i <= count){
    document.write("<h2 style='color:red;'>"+i+"</h2>")
    i = i + 1;
}

//LISTAS

miLista = ["Bryan","Ariel","Sanchez","Anariba"];
document.write("Valor 1 del arreglo " + miLista[0] + "<br>");
document.write("Valor 2 del arreglo " + miLista[1] + "<br>");
document.write("Valor 3 del arreglo " + miLista[2] + "<br>");
document.write("Valor 4 del arreglo " + miLista[3] + "<br>");

