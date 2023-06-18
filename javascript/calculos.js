let btnBorrar = document.getElementsByClassName("btn_borrar")[0];
let btnResumen = document.getElementById("resumen");
let categorias = document.querySelector("[name=lista]"); //en este caso se utiliza un selector de atributo
let inputTotal = document.querySelector("#total");
let cantBoletos = document.querySelector("#cantidad");
let catEstudiante = 0.8;
let catTrainee = 0.5;
let catJunior = 0.15;
let descuento = 0;
let precioOriginal = 200;
let precioFinal = 0;
var vacio = 0;
// ----------- Para validación--------
let vnombre = document.getElementById("nombre");
let vapellido = document.getElementById("apellido");
let vemail = document.getElementById("email");
var vacio = 0;


btnBorrar.addEventListener('click', () => {
    inputTotal.value = "  Total a pagar: $ ";
});

/* 
Web de apoyo para obtener valores y textos del select
https://www.creatuwebnicaragua.com/obtener-valores-y-texto-de-un-select-con-javascript/
*/

function tipoDeDescuento() {
    let catSeleccionada = categorias.options[categorias.selectedIndex].text;
    precioFinal = 0;
    if (catSeleccionada == 'Junior') {
        descuento = catJunior;
    } else if (catSeleccionada == "Trainee") {
        descuento = catTrainee;
    } else {
        descuento = catEstudiante;
    }
    precioFinal = precioOriginal - (precioOriginal * descuento);
}


function validar() {
    vacio = 0;
    if (vnombre.validity.valueMissing) {
        alert("Por favor, ingrese su nombre.");
        vacio = 1;
    } else if (vapellido.validity.valueMissing) {
        alert("Por favor, ingrese su apellido.");
        vacio++;
    } else if (vemail.validity.valueMissing) {
        alert("Por favor, ingrese su email.");
        vacio++;
    }
}

btnResumen.addEventListener('click', () => {
    let total = 0;
    validar();
    if (vacio == 0) {
        tipoDeDescuento();
        total = precioFinal * cantBoletos.value;
        inputTotal.value = "  Total a pagar: $ " + total.toString();
    }
}); 
