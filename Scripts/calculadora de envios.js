



let cuantoquieroenviar = document.getElementById('inputNumero')
let valor = cuantoquieroenviar.value
let resultadocalc = document.getElementById('resultado') 


cuantoquieroenviar.addEventListener('input',function(){

    const valor = parseFloat(cuantoquieroenviar.value)

    if (valor < 2500000){
    let acopiar = valor * 0.9429514091
    acopiar = acopiar.toFixed(2)
    resultadocalc.textContent = `A pegar en la casilla es ${acopiar}`
    copynumber(acopiar);
        
}else if (valor >= 2500000) {
    let acopiar = valor + 30250
    acopiar = acopiar.toFixed(2)
    resultadocalc.textContent = `A pegar en la casilla es ${acopiar}`
    copynumber(acopiar.toFixed(2));

} else if (valor == NaN) {
    resultadocalc.textContent = `A pegar en la casilla es 0.00`
}

})
text








resultadocalc.textContent = `El resultado es: ${acopiar}` ; 





function copynumber(numero){ //Funcion del boton que copia el numero
    navigator.clipboard.writeText(numero);
    
}



