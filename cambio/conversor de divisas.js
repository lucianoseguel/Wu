
//Obtener fechas
const fecha = new Date;
let año = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();


let resultado = compradolar();


console.log(mes+1);

    
 //Obtener los precios de dolares   

//CALCULADORA DOLARES
 function compradolar(){
    let preciodolar = document.getElementById("preciodolar").value;
    let montodolar = document.getElementById('montodolar').value;

    let preciodolarchico = document.getElementById("preciodolarchico").value;
    let montodolarchico = document.getElementById('montodolarchico').value;

    let preciodolarcompra = document.getElementById('preciodolarcompra').value; 
    let montodolarcompra = document.getElementById('montodolarcompra').value;

    
    let resultado = (preciodolar * montodolar) + (montodolarchico * preciodolarchico) + (preciodolarcompra * montodolarcompra);
    console.log(resultado)
    
    let titulo = document.querySelector('#resultdolar')
        titulo.textContent = ` ${(resultado)}`
   
 }

//CALCULADORA REALES
 function comprareal(){
    let precioreal = document.getElementById("precioreal").value;
    let montoreal = document.getElementById('montoreal').value;

    let preciorealcompra = document.getElementById('preciorealcompra').value; 
    let montorealcompra = document.getElementById('montorealcompra').value;

    
    let resultado = (precioreal * montoreal) + (preciorealcompra * montorealcompra);
    console.log(resultado)
    
    let titulo = document.querySelector('#resultreal')
        titulo.textContent = ` ${(resultado)}`
   
 }

//CALCULADORA EUROS
function compraeuro(){
    let precioeuro = document.getElementById("precioeuro").value;
    let montoeuro = document.getElementById('montoeuro').value;

    let precioeurocompra = document.getElementById('precioeurocompra').value; 
    let montoeurocompra = document.getElementById('montoeurocompra').value;

    
    let resultado = (precioeuro * montoeuro) + (precioeurocompra * montoeurocompra);
    console.log(resultado)
    
    let titulo = document.querySelector('#resulteuro')
        titulo.textContent = ` ${(resultado)}`
   
 }


//CALCULADORA CHILENO
function comprachileno(){
    let preciochileno = document.getElementById("preciochileno").value;
    let montochileno = document.getElementById('montochileno').value;

    let preciochilenocompra = document.getElementById('preciochilenocompra').value; 
    let montochilenocompra = document.getElementById('montochilenocompra').value;

    
    let resultado = (preciochileno * montochileno) + (preciochilenocompra * montochilenocompra);
    console.log(resultado)
    
    let titulo = document.querySelector('#resultchileno')
        titulo.textContent = ` ${(resultado)}`
   
 }