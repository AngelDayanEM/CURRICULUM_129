class Node {
  constructor(_value) {
    this.value = _value;   // Es el dato que vamos a almacenar
    this.next = null;      // El apuntador que va hacia a adelante
    this.prev = null;      // EL apuntador que va hacia a atras // previus es lo mismo que prev
  }
}

class DoublyLinkedList {       // Tiene los siguientes atributos:                            
    constructor() {             
    this.head = null;                //head: Puntero al primer nodo de la lista.
    this.tail = null;                 //tail: Puntero al último nodo de la lista.
                
  }
  // Agregar un nodo al inicio de la lista

AGG_Alinicio(){
const newNode = new Node(_value);

if (!this.head ) {
  this.head = newNode;
  this.tail = newNode;
} else {
  newNode.next = this.head;
  this.head.prev = newNode;
  this.head = newNode;
}

this.length++;
alert("Elemento agregado al inicio es:" + _value);
}

  // Agregar un nodo al final de la lista
  AGG_Alfinal(_value) {
    const newNode = new Node(_value);

    if (!this.head ) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    alert("Elemento agregado al final es:" + _value);
  }

  // Eliminar un nodo al Inicio
  Elim_AlInicio (_value) {   
    if(!this.head){
    }else{
    
    if (this.head==this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      const temp = this.head;
      this.head= this.head.next;
      this.head.prev= null;
      temp.next= null
    }
  }
  }
  //Eliminar un Nodo al final
  Elim_AlFinal (_value) {   
    if(!this.head){
    }else{
    if (this.head==this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      const temp = this.head;
      this.head= this.head.next;
      this.head.prev= null;
      temp.next= null
    }

  }
  
}
// Buscar el nodo

Buscar_Dato(){
let currentNode = this.head;
while (currentNode) {
  if (currentNode.data === data) {
    return true;
  }
  currentNode = currentNode.next;
}
return false;
}

display() {
let currentNode = this.head;
let elements = "";
while (currentNode) {
  elements += currentNode.data + " <-> ";
  currentNode = currentNode.next;
}
elements += "null";
alert("Elementos de la lista doblemente enlazada:\n" + elements);
}
}

// Menu para seleccionar cada metodo

function lista(){
  const lista= new LinkedList()
   while(true){
   
  const opcion = prompt(
      "Selecciona una opción:"+ 
  "1. inserta un elemento  al inicio de la lista\n"+
  "2. agregar un elemento al final de la lista\n" + 
  "3. borrar un elemento al inicio de la lista\n"+
  "4. borrar un elemento al final de la lista\n" + 
  "5. Buscar un elemento dentro de la lista"  + 
  "6. salir"
  ) 
  switch (opcion) {
      case '1':
       const dataA= prompt("ingresa el dato a ingresar al inicio de la lista") ;
       lista.AGG_Alinicio(dataA);
        break;
      case '2':
        const dataF = prompt ("ingresa el dato a buscar en la lista");
        lista.AGG_Alfinal(dataF);
        break;
      case '3':
      lista.Elim_AlInicio();
        break;
      case '4':
        lista.Elim_AlFinal();
        break;
        case '5':
        const Busqueda=prompt("ingresa el elemento a buscar:" );
        const ResultBusqueda= lista.Buscar_Dato(Busqueda);
        alert("El resultado de la busqueda es:" + ResultBusqueda);
          break;
          case '7':
        window.close
        return 
      default:
        alert('Opción inválida. Seleccione otra opción.');
        break;
     }    
   }

   }    
lista()