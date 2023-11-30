function fibonacciFor(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      let fib = [0, 1];
      for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      return fib[n];
    }
  }
  
  function fibonacciRecursivo(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
    }
  }
  
  function mostrarMenu() {
    var opcion = prompt(
      "Selecciona una opción:\n" +
      "1 Calcular Fibonacci con bucle for.\n" +
      "2 Calcular Fibonacci con recursión: \n" +
      "3 Salir.\n" +
      "Ingrese el número de la opción"
    );
  
    switch (opcion) {
      case "1":
        var n = prompt("Introduce el número de la serie Fibonacci:");
        var res = fibonacciFor(n);
        alert("El resultado de la serie Fibonacci es: " + res);
        mostrarMenu();
        break;
      case "2":
        var n = prompt("Introduce el número de la serie Fibonacci:");
        var res = fibonacciRecursivo(n);
        alert("El resultado de la serie Fibonacci es: " + res);
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