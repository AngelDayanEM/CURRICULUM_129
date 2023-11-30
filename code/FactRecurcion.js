function factorialFour(numero) {
    let resultado = 1;
  
    if (numero == 1 || numero == 0) {
      return resultado;
    } else {
      for (let i = 2; i <= numero; i++) {
        resultado = resultado * i;
      }
    }
    return resultado;
  }
  
  function factorialRecursion(numero) {
    if (numero == 0 || numero == 1) {
      return 1;
    } else {
      return numero * factorialRecursion(numero - 1);
    }
  }
  
  function mostrarMenu() {
    var option = prompt(
      "Selecciona una opción:\n" +
      "1. Calcular factorial con for\n" +
      "2. Calcular factorial con recursión\n" +
      "3. Salir"
    );
  
    switch (option) {
      case "1":
        var numero = prompt("Introduce un número");
        var res = factorialFour(numero);
        alert("Para el primer caso, el resultado es: " + res);
        mostrarMenu();
        break;
      case "2":
        var numero = prompt("Introduce un número");
        var res = factorialRecursion(numero);
        alert("Para el segundo caso, el resultado es: " + res);
        mostrarMenu();
        break;
      case "3":
        return;
      default:
        alert("Opción inválida. Seleccione otra opción.");
        mostrarMenu();
        break;
    }
  }
  
  mostrarMenu();