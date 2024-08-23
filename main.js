import { Moto } from "./classe/moto.js";
import { Voiture } from "./classe/voiture.js";

let vehicule1 = document.querySelector("#voiture");
let vehicule2 = document.querySelector("#moto");

const voiture1 = new Voiture("Renault", "Kangoo", 240000, 2003, "Climatisée")
console.log(voiture1);

const moto1 = new Moto("BMW", "R1150R Rockster", 65000, 2005)

vehicule1.innerHTML = voiture1.display();
vehicule2.innerHTML = moto1.display();

console.log(moto1.display());
console.log(voiture1.display());


