var lenguajes = ['Python', 'java', 'c#','JavaScrip','C++',]
// declarar la variable
//tipo de variable se instancia parseInt para capsular 
// parseo sirve para 
//tarea parceo(oides datos) y casting (aventar datos )
//lengue es para 


function imprimeForbasico(_lenguajes){
    let salida= ''
    for( i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + '\n'
    }//regresa a sus posiciones 
    alert(salida)
 }

function imprimeFor(_lenguajes){
    let salida= ''
    for( i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + ' se encuentra en el indice ' + i + '\n'
    }
    alert(salida)
    //recorria 
 }

function imprimeForechbasico(_lenguajes){
   let salida=''
    lenguajes.forEach(element => 
        salida += element + '\n'
    )//forEach es un apuntador reguistra la memoria que esta adelante y atras se sale cuando esta vasio los elementos, solo en caso que no tengamos ''

    alert(salida)
}
// es mas eficiente forEach o un for o con un white es mejor forEach por que se va derecho 

function imprimeTamaño(lenguajes){
 Tam= lenguajes.length;
  alert(Tam)

}

function imprimeElemento(posicion){
  if (posicion<Tam){
  salida = "La pocicion que buscas es" + posicion + "el elemento que esta en esa pocicion es"+ lenguajes(posicion)
   } else{
    salida="El elemento en la pocicion que buscaste no exixte "
   }
  alert(salida)

}
function imprimeForech(lenguajes){
    let salida=''
    lenguajes.forEach(function (_valor, _indice){
        salida += _valor + ' se encuentra en el indice ' + _indice + '\n'
        })//este es mas rapido (forEach)

    alert(salida)
}
function agregarElemento(){
let salida=''
let elemento = prompt("Ingrese un nuevo lenguaje")
lenguajes.push(elemento)
salida= 'El lenguaje de programacoion ' + elemento + 'a sido agregado al arreglo'
}

function eliminaElemento(){
  let salida=''
  let elemento = prompt("cual es el  lenguaje que deseas eliminar")
  var indice = lenguajes.indexOf(elemento)
  if(indice !== -1){
    lenguajes.splice(indice,1)
    salida='lenguaje elemento:' + elemento

  }else salida ='el lenguaje no se ha encontrado '

  alert(salida)
}

function mostrarMenu(){
opcion = prompt('Seleccione una opción:' +
'\n1. Imprimir lenguajes con "for" básico.'+
'\n2. Imprimir lenguajes con "for" y su índice.' +
'\n3. Imprimir lenguajes con "forEach" básico.'+
'\n4. Imprimir lenguajes con "forEach" y su índice.' +
'\n5. Imprime tamaño del arreglo.' +
'\n6. Imprime elemento del arreglo.' + 
'\n7. Agrega un elemento al arreglo.' + 
'\n8. Elimina un elemento al arreglo.' +
'\nIngrese el número de la opción:');
  switch (opcion) {
    case '1':
      imprimeForbasico(lenguajes);
      mostrarMenu();
      break;
    case '2':
      imprimeFor(lenguajes);
      mostrarMenu();
      break;
    case '3':
      imprimeForechbasico(lenguajes);
      mostrarMenu();
      break;
    case '4':
      imprimeForech(lenguajes);
      mostrarMenu();
      break;
      case '5':
        imprimeTamaño(lenguajes);
        mostrarMenu();
        break;
      case '6':
      imprimeElemento(posicion);
      mostrarMenu();
      break;
      case '7':
        imprimeFor(lenguajes);
        mostrarMenu();
        break;
      case '8':
        eliminaElemento();
        mostrarMenu();
        break;
    default:
      alert('Opción inválida. Seleccione otra opción.');
      break;
  }
}

mostrarMenu()