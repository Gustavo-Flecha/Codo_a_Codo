let vnombre = document.getElementById("nombre");
let vapellido = document.getElementById("apellido");
const vemail = document.getElementById("email");
const cantBoletos = document.querySelector("#cantidad");
var vacio = 0;

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
    } else if (cantBoletos.value < 1){
        alert("Por favor, ingrese cuántos tickets quiere");
        vacio++;
    }



}
