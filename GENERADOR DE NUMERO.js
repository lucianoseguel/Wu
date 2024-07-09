//Generador de contraseñas 


//variables principales

let telefono = "1234567890";
let direcciones = [ "San Martin",
"Las Heras",
"Godoy Cruz",
"Aristides Villanueva",
"Belgrano",
"Patricias Mendocinas",
"Colon",
"Necochea",
"Sarmiento",
"25 de Mayo",
"Chile",
"Espana",
"Pedro Molina",
"San Juan",
"Montevideo",
"Lavalle",
"Alvear",
"Espejo",
"9 de Julio",
"Rivadavia"];

//---------------------------Funciones

function number_generator(string, nkey){//Generador de numeros de telefono
    
    let frase ='' ;
    
    
    for (let i = 0; i < nkey; i++) {

        let rvalue = Math.floor(Math.random() * string.length);
        const indexword = string[rvalue];

        frase += string[rvalue];
    } 

    

    return frase;
};


function adress_generator(numeros, direcciones){//Generador de direcciones
    
    let ncalle ='' ;
    let calle = ''; 
    
    
    for (let i = 0; i < 3; i++) {

        let rvalue = Math.floor(Math.random() * numeros.length);
        const indexword = numeros[rvalue];

        ncalle += numeros[rvalue];
    } 

    for (let i = 0; i < 1; i++) {

        let rvalue = Math.floor(Math.random() * direcciones.length);
        const indexword = direcciones[rvalue];

        calle = direcciones[rvalue];
    } 

    let frase = `${calle} ${ncalle}`


    return frase;
};





function copynumber(numero){ //Funcion del boton que copia el numero
    navigator.clipboard.writeText(numero);
    
}







function reload(){ //Recargar la pagina con boton refresh
    location.reload()
}






//---------------------GLOBAL A ESCRIBIR---------------------


let ntelefono = '11' + number_generator(telefono, 8);
let direccion = adress_generator(telefono, direcciones);

document.write(`Direccion nueva generada:  ${direccion}    <button onclick="copynumber(direccion)">Copiar direccion</button> <br> <br> `);

document.write(`Numero de telefono generado: ${ntelefono}    <button onclick="copynumber(ntelefono)">Copiar numero</button> <br>  <br>`); 


