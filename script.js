//alert("Hola este es mi Javascript");
/*let nombre = "wa";
nombre = "was";
console.log(nombre)*/
/*
let title = document.querySelector(".acerca-de h2");
title.innerText = "nombre";
console.log(title.textContent);
if (title.textContent == "nombre") {
    console.log("wa");
} else {
    console.log("no cumple");
}

let nombre = "Dennis";
let ciudad = 'Cajamarca';
let parrafo2 = document.querySelector(".parrafo-2");
parrafo2.textContent = parrafo2.textContent.replace(nombre, "Jhelsin").replace("Chota", ciudad);*/
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};

