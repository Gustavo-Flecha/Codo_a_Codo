let cardA = document.getElementsByClassName("estudiante")[0];
let cardB = document.getElementsByClassName("trainee")[0];
let cardC = document.getElementsByClassName("junior")[0];
let category = document.getElementById("category");

function defaultColor() {
    cardA.style.backgroundColor = 'transparent';
    cardB.style.backgroundColor = 'transparent';
    cardC.style.backgroundColor = 'transparent';
}

cardA.addEventListener('click', () => {
    defaultColor();
    category.selectedIndex = "1";
    cardA.style.backgroundColor = '#00bdff';
})

cardB.addEventListener('click', () => {
    defaultColor();
    category.selectedIndex = "2";
    cardB.style.backgroundColor = '#4ab6c8';
})

cardC.addEventListener('click', () => {
    defaultColor();
    category.selectedIndex = "3";
    cardC.style.backgroundColor = '#fec10a';
})

