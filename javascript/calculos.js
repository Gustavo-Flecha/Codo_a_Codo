let btnBorrar = document.getElementsByClassName("btn_borrar")[0];
let btnResumen = document.getElementById("resumen");
let categorias = document.querySelector("[name=lista]"); //en este caso se utiliza un selector de atributo
let inputTotal = document.querySelector("#total");
let catEstudiante = 0.8;
let catTrainee = 0.5;
let catJunior = 0.15;
let descuento = 0;
let precioOriginal = 200;
let precioFinal = 0;

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
    if (catSeleccionada == 'Espectador') {
        descuento = 0;
    }
    else if (catSeleccionada == 'Junior') {
        descuento = catJunior;
    } else if (catSeleccionada == "Trainee") {
        descuento = catTrainee;
    } else {
        descuento = catEstudiante;
    }
    precioFinal = precioOriginal - (precioOriginal * descuento);
}

btnResumen.addEventListener('click', () => {
    let total = 0;
    validar();
    if (vacio == 0) {
        tipoDeDescuento();
        total = precioFinal * cantBoletos.value;
        inputTotal.value = "  Total a pagar: $ " + total.toString();
        alert("Su resumen se ha completado");
    }
    
}); 
