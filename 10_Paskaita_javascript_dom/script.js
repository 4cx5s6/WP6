const nameElementById = document.getElementById("name");
const nameElementByQuerySelector = document.querySelector("#name");//pagal id


const listItem = document.querySelector(".list-item");// pagal klase
const allListItems = document.querySelectorAll(".list-item");// padal klase visi elementai kartu
 
const heading = document.querySelector("h1");// pagal elemento tipa

console.log(nameElementById);
console.log(nameElementByQuerySelector);
console.log(heading);

//nameElementById.textContent = "Mano vardas Lukne";

const randomDiv = document.getElementById("random");
randomDiv.innerHTML = "Kaip <strong> Jums? </strong> sekasi?";//kai norim pakeisti htmla

// teksto keitimas
// 1. istraukti HtML elementa
// 2. reikia prideti paspaudimo funkcionaluma
// 3. pakeisti elemento vidu su textContent arba innerHTML

// 1.
const changeNameButton = document.getElementById("change-name");
console.log(changeNameButton);

// 2.
changeNameButton.addEventListener("click", function() {
    nameElementById.textContent = "Mano vardas Lukne";  
}); // 3. 

// background spalvos keitimas

const nightModeButton = document.getElementById("night-mode");
console.log(nightModeButton);

const bodyElement = document.body;
// arba const bodyElement = document.querySelector("body");
console.log(bodyElement);
nightModeButton.addEventListener("click", function () {
    bodyElement.className = "night-mode";
});

// elemento pridejimas
// istraukim mygtuka ir elementa i kuri noresim ideti
// priskiriam mygtukui click listener
// sukuriam nauja elementa, pridedam jam teksta ir reikalingus atributus
// panaudojam  ant elemento i kuri norime ideti

const addAnimalButton = document.getElementById("add-animal");
const animalListElement = document.getElementById("animal-list");// ul

addAnimalButton.addEventListener("click", function(){
    const newListItem = document.createElement("li");// sukuriam elementa
    newListItem.textContent = "Asiliukas";
    animalListElement.appendChild(newListItem);// pridedam i norima elementa kaip vaikini
});

