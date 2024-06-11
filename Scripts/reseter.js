let tiempo = 30

function reload(){ //Recargar la pagina con boton refresh
    if (tiempo > 0) {
        console.log(tiempo);
        tiempo--;
    }else{
        location.reload()//Recarga la pagina al llegar a 0
        
    }

 
}



const intervalo = setInterval(reload,1000)