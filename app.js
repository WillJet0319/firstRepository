// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Declaraccion del array para almacenamiento de nombres
let amigos = [];

//funcion de asignacion a HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

//Funcion para agregar amigos a la lista

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;

    if (amigo == ""){
        alert("Por favor, inserte un nombre");
    }
    else {
        amigos.push(amigo);
        limpiarCaja();
    }
    console.log(amigos);
    listaAmigos();
    return;
}

//Limpiar caja despues de cada nombre
function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

//Mostrar el listado de amigos en pantalla 
function listaAmigos(){

    document.getElementById("listaAmigos").innerHTML = "";

    for (i= 0; i <amigos.length; i++){
        var li = document.createElement("li");
        listado = amigos[i];
        li.appendChild(document.createTextNode(listado));
        document.getElementById("listaAmigos").appendChild(li);
    }
    console.log(amigos.length)
   
}

function sortearAmigo(){
    console.log(amigos);
    console.log(amigos.length);
   // console.log(amigos);
    if (amigos == ""){

    } else {
        let numeroMaximo = amigos.length;
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        document.getElementById("resultado").innerHTML = amigos[numeroGenerado - 1];
    }
}