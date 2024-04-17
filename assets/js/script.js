
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let btnEnviar = document.getElementById("btnEnviar");

let nombreV = "";
let apellidoV = "";

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    error1.innerHTML = "";

    nombreV = nombre.value;
    apellidoV = apellido.value;
    edadV = edad.value;

    if(nombreV === ""){
        error1.innerHTML = "debe ingresar su nombre"
        error1.style.color = "red";
        return;
    }


    console.log(typeof(nombreV));
    nombre.value = "";
    apellido.value = "";
    console.log('Envio de datos exitoso');

})