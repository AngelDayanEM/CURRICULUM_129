var especie, nombre, edad

class Animal{
    constructor(especie_, nombre_, edad_){
        this.especie=especie_
        this.nombre=nombre_
        this.edad=edad_
    }
    obtenerinformacion(){
        return `Especie: ${this.especie}\nNombre: ${this.nombre}\nEdad: ${this.edad} años`;
    }
}
function mostrarMenu(){
    var option= prompt(
        "seleccione una opcion\n" + 
        "1.  ingresar informacion. \n" +
        "2. Ingrese el numero de la opcion:"
    );

    switch (opcion){
        case "1":
            ingresarinformacion();
            break;
            case "2":
            MostrarInformacion();
            break;
            default:
                alert("Opcion invalida. Seleccione otra opcion");
                mostrarMenu()
                break
    }
}

var Animal;

function ingresarinformacion(){
    var especie= prompt("ingrese la especie del animal");
    var nombre= prompt("ingrese el nombre del animal");
    var edad= prompt("ingrese la edad del animal en años");

    Animal=new Animal1(especie, nombre, edad);
    alert("Informacion del animal almacenadamente exitosamente");
    
    mostrarMenu();
}
function MostrarInformacion(){
if(Animal){
    var informacion=Animal.obtenerinformacion();
    alert(informacion);
 } else {
    alert("No a ingresado informacion de un animal. Por favor, seleccione la opcion 1 para ingresar informacion.");
    mostrarMenu();

}
}
mostrarMenu()

