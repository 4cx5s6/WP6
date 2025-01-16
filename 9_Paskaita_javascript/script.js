console.log("Hello my name is Rasa")

//camelCase - pirmoji raidė mažoji, sekančių žodžių didžiosios

const firstName = "Rasa";
const lastName ="Mažolė";
 
console.log(firstName +" "+lastName);

var dogName = "Smikis"; //senovinis nebenaudojamas
let age = 30; //naujovinis, naudojam kai reikia priskirti iš naujo reikšmę
const catName = "Pilkis"; //naujovinis, naudojam kai nereikia priskirti naujos reikšmes

const discount = 0.7

const isAdult = false;

const products = ["Apple", "Banana", "Chery", "Date", "Eldererry"];
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    }

  //1 uzduotis
  
  const shopName = "Maxima";
  const peoplecount = 500;
  const consentWithPrivacyPolicy = true;

  const test ="Rasa";

  //If (salygos)

  let animalCount = 49;

  if (animalCount >50) {
    console.log("Zoologios sode yra daug gyvūnų");
  } else {
    console.log("Zoologios sode yra mažai gyvūnų");
  }
  
  let personAge = 18;

  if (personAge > 18) {
    console.log("Į klubą neįleisim... :");
  } else {
    console.log("Prašome užeiti");
  }

  const yearsOfExperience = 11;

  if (yearsOfExperience < 2) {
    // iki2
    console.log("Atlygis iki 1500e");
  } else if (yearsOfExperience <5) {
    // nuo 2 iki 5
    console.log("Atlygis iki 3000e");
  } else if (yearsOfExperience < 10) {
    // nuo 5 iki 10
    console.log("Atlygis nuo 3500e");
  } 

  const maternityLeaveInYears = 5;

  if (maternityLeaveInYears === 0) {
    console.log("Išmoka 80proc.");
   } else if (maternityLeaveInYears === 1) {
    console.log("Išmoka 50proc.");
  } else if (maternityLeaveInYears === 2) {
    console.log("Išmoka 30proc.");
  } else {
    console.log("Nepriklauso");
  }


  const champYears = 4;

  if(champYears !==4) {
    console.log("Šiais metais nevyksta čempionatas");
    } else {
      console.log("Vyksta");
    }

    //&& and (ir)

    let number = 10;
    let number2 = 10;
    let value = 15;

    if (value > number && value < number2) {
      console.log("The value is between 10 and 20");
    } else {
      console.log("The value is not in range");
    }
 substr
    // || or (arba)

    let monch = 1; //sausis

    if (monch === 1 || monch === 2 || monch ===3) {
      console.log("Žiema");
    }

    let sum = 10 + 5; //15
    let substraction = sum - 7; //8
    let multi = sum * substraction; //15*8
    let division = 6 / 3;
    