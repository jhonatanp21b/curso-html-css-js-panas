// console.log("Hello, world!");

// Manera de definir variables en js

// let nombre = "Juan";
// nombre = "Pedro";
// console.log(nombre);

// const NOMBRE = "juan";
// NOMBRE = "Pedro"; // Esto no se puede hacer porque es una constante
// console.log(NOMBRE);

// var nombre = "Juan";
// console.log(nombre); // Juan

// const optShowcase = document.getElementById("opt-showcase"); // Obtener elemento por id

// li - Opcion resources
const optResources = document.querySelector(".opt-resources"); // Obtener elemento por clase
const optResourcesContent = document.querySelector(".opt-resources-content");
const resourcesSvg = document.querySelector(".resources-svg"); // Obtener elemento por id

// La funcion que esta dentro de la funcion que escucha el evento se llama callback
optResources.addEventListener("click", () => {
  // optresources.children[0].classList.toggle("rotate-up"); // no recomendada
  resourcesSvg.classList.toggle("rotate-up"); // recomendada
  optResourcesContent.classList.toggle("show-opt-content");

  optCommunityContent.classList.remove("show-opt-content");
  communitySvg.classList.remove("rotate-up");
});

// li - Opcion community

const optCommunity = document.querySelector(".opt-community");
const optCommunityContent = document.querySelector(".opt-community-content");
const communitySvg = document.querySelector(".community-svg");

optCommunity.addEventListener("click", () => {
  communitySvg.classList.toggle("rotate-up");
  optCommunityContent.classList.toggle("show-opt-content");

  optResourcesContent.classList.remove("show-opt-content");
  resourcesSvg.classList.remove("rotate-up");
});
