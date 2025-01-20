// 1 uzduotis
const heading = document.getElementById("heading");
const text = document.getElementById("text");
const box = document.getElementById("box");

heading.textContent = "Sveiki atvyke i Salona :)";
text.innerHTML = "Kiek jums metu? <i class='small-text'>Ileidziame nuo 18 metu!</i>";
box.className = "black-box";

document.getElementById("red-box").className = "red-box";

// 2 uzduotis (pasunkinta, nes prideta button)

const birthdayButton = document.getElementById("birthday-button");
const birthdaySection = document.getElementById("birthday-section");
const birthdayText = document.getElementById("birthday-text");

birthdayButton.addEventListener("click", function(){
    const birthdayCard = document.createElement("div");
    birthdayCard.className = "birthday-card";
    birthdayCard.textContent ="Su gimtadieniu sveikina draugai!";

birthdaySection.replaceChild(birthdayCard, birthdayText);//sukeitimas
});
//birthdaySection.replaceChild(birthdayButton);
//birthdayButton.remove(); // nuemus-nelieka mygtuko.
//paspaudus mygtuka sveikinti Toma, pasikeicia:Su gimtadieniu sveikina draugau
//birthdayButton.className = "hide"; //pasislepia myhtukas

// 3 uzduotis
