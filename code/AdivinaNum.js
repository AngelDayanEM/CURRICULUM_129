var numeroSecreto=Math.trunc(Math.random() *20) + 1;
var intentos = 7;
var logrado=0;

function adivinaelnumero(numero, vidas, logrrado){
    while(true){
        vidas=vidas-1
        logrado += 1
        var usuario = prompt("piense en un numero entre el 1 y el 20. ¿cual es?")
        if(usuario==0){
            break
        }
        else if (vidas == 0){
            alert("has perdido")
            break
         
        }
        else if (usuario == numero){
            alert("has ganado al  intento" + logrado)
            break
    }
    else if (usuario < numero){
        alert("el numero es menor vuelve a intentarlo")
        break

}
      else if (usuario > numero){
         alert("has perdido")
         break
}
}
}

adivinaelnumero(numeroSecreto, intentos, logrado)