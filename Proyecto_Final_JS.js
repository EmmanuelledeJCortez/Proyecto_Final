<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2021 by anonymous (http://jsbin.com/beceluhoka/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
var precio_base = 2000

var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

var recargo = 0
var recargo_total = 0

alert("Aseguradora TK.U, Bienvenido")
alert("Sistema de Cotización Automatica de Seguros")

var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene?")

var casado = prompt("¿Está casado actualmente?")
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}

var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?")
var cantidad_hijos
if ("SI"==casado.toUpperCase()){
  cantidad_hijos=prompt("¿Cuántos hijos tiene?")
}

var cantidad_hijos_numero=0
if("SI"==hijos.toUpperCase()){
  cantidad_hijos_numero=parseInt(hijos)
}

if(edad_numero>=18 && edad_numero<25){
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo
}

if(edad_numero>=25&& edad_numero<50){
    recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}

if(edad_numero>=50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}

if(edad_conyuge_numero>=18 && edad_numero<25){
  recargo = precio_base * casado_18
  recargo_total = recargo_total + recargo
}

if(edad_conyuge_numero>=25&& edad_numero<50){
  recargo = precio_base * casado_25
  recargo_total = recargo_total + recargo
}

if(edad_conyuge_numero>=50){
  recargo = precio_base * casado_50
  recargo_total = recargo_total + recargo
}

if(cantidad_hijos){
    recargo = precio_base * hijos_recargo
  recargo_total = recargo_total + recargo
}





precio_final = precio_base + recargo_total
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)


























</script>
</body>
</html>