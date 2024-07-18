/*Sea el nombre y la edad de varias Persona. Se necesita un programa que lea estos datos y 
reporte al final la edad promedio y la edad mayor entre las mujeres. 
Se tienen las siguientes Persona: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), 
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16) */


import Persona from "./Persona.js";
import TodoPersona from "./TodoPersona.js";

let per1= new Persona("Luis", 15, "M");
let per2= new Persona("Ana", 19, "F");
let per3= new Persona("José", 21, "M");
let per4= new Persona("Carmen", 17, "F");
let per5= new Persona("Rosa", 18, "F");
let per6= new Persona("José", 22, "M");
let per7= new Persona("María", 17, "F");
let per8= new Persona("Luz", 19, "F");
let per9= new Persona("Rafael", 23, "M");
let per10= new Persona("Liz", 15, "F");
let per11= new Persona("Marcos", 20, "M");
let per12= new Persona("Leo", 16, "M");

let todoPersona= new TodoPersona()

todoPersona.procesarPersona(per1);
todoPersona.procesarPersona(per2);
todoPersona.procesarPersona(per3);
todoPersona.procesarPersona(per4);
todoPersona.procesarPersona(per5);
todoPersona.procesarPersona(per6);
todoPersona.procesarPersona(per7);
todoPersona.procesarPersona(per8);
todoPersona.procesarPersona(per9);
todoPersona.procesarPersona(per10);
todoPersona.procesarPersona(per11);
todoPersona.procesarPersona(per12);

let salida= document.getElementById("Salida")
salida.innerHTML= "A continuación se mostrarán los resultados: <br>"
salida.innerHTML+= `La edad promedio es: ${todoPersona.calcPromedio()}`
salida.innerHTML+= `<br>La edad mayor entre las mujeres es: ${todoPersona.devolverEdadMayorFem()}`