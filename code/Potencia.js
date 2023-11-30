  /** Este método permite calcular la potencia a travez de una base y de una potencia
 Comienza inicializando una variable resultado en 1. 
 Luego, utiliza un bucle for para iterar desde 1 hasta la potencia. 
 En cada iteración, multiplica el resultado por la base. 
  @param base recibe un valor 
    @param potencia recibe un valoor 

 */
function potenciaFor(base, potencia) {
    let resultado = 1
    for (let i = 1; i <= potencia; i++) { 
      resultado = resultado * base
    }
    return resultado
  }

/**calcula la potencia atravez de recurcividad este hace que en cada llamada que se llama a la funcion se resta 
   @param base recibe un valor 
    @param potencia recibe un valoor 
*/
  function potenciaRecursiva(base, potencia) {
    if (potencia === 0) {// cualquier numero elevado a al 0 es 1
      return 1
    }
    return base * potenciaRecursiva(base, potencia - 1)
  }
  // se creo un menu para poder realizar las pruebas 
  function mostrarMenu() {
    var opcion = prompt(
      "Selecciona una opción:\n" +
      "1 Calcular potencia con bucle for.\n" +
      "2 Calcular potencia con recursión: \n" +
      "3 Salir.\n" +
      "Ingrese el número de la opción"
    );
  
    switch (opcion) {
      case "1":
        var base = prompt("Introduce la base:");
        var potencia = prompt("Introduce el potencia:");
        var res = potenciaFor(base, potencia);
        alert("El resultado de la potencia es: " + res);
        mostrarMenu();
        break;
      case "2":
        var base = prompt("Introduce la base:");
        var potencia = prompt("Introduce el potencia:");
        var res = potenciaRecursiva(base, potencia);
        alert("El resultado de la potencia es: " + res);
        mostrarMenu();
        break;
      case "3":
        window.close()
        return;
      default:
        alert("Opcion invalida. Seleccione otra opción");
        mostrarMenu();
        break;
    }
  }
  
  mostrarMenu();