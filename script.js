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
  toggleClassRotateSvg(resourcesSvg);
  optResourcesContent.classList.toggle("show-opt-content");

  optCommunityContent.classList.remove("show-opt-content");
  removeClassRotateSvg(communitySvg);
});

// li - Opcion community
const optCommunity = document.querySelector(".opt-community");
const optCommunityContent = document.querySelector(".opt-community-content");
const communitySvg = document.querySelector(".community-svg");

optCommunity.addEventListener("click", () => {
  toggleClassRotateSvg(communitySvg);
  optCommunityContent.classList.toggle("show-opt-content");

  optResourcesContent.classList.remove("show-opt-content");
  removeClassRotateSvg(resourcesSvg);
});

function toggleClassRotateSvg(elementSvg) {
  elementSvg.classList.toggle("rotate-up");
}

function removeClassRotateSvg(elementSvg) {
  elementSvg.classList.remove("rotate-up");
}

// Funcion de flecha
// const saludar2 = () => {
//   console.log("Saludando en la funcion de flecha");
// };

// Escucha de eventos para varios elementos - avanzado
// const listOptionHeader = document.querySelectorAll(".opt-header");

// listOptionHeader.forEach((liElement, key) => {
//   liElement.addEventListener("click", () => {
//     listOptionHeader.forEach((otherElement) => {
//       if (otherElement != liElement) {
//         otherElement.childNodes[1]?.classList.remove("rotate-up");
//         otherElement.childNodes[3]?.classList.remove("show-opt-content");
//       }
//     });

//     liElement.childNodes[1].classList.toggle("rotate-up");
//     liElement.childNodes[3].classList.toggle("show-opt-content");
//   });
// });

// Tipos de datos
// string "los textos"
// number 1234
// float 1.5
// boolean true o false

// objects
// const usuario = {
//   nombre: "Jhonatan",
//   apellido: "Peña",
//   edad: 23,
//   hobits: ["Jugar juegos", "pintar", "Bailar", 123, false, 1.9],
// };

// Array
// const listPeliculas = ["jumanji", "titanic", "interesletaer"];
