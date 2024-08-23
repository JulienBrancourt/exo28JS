import { Moto } from "./classe/moto.js";
import { Voiture } from "./classe/voiture.js";

let vehicule1 = document.querySelector("#voiture");
let vehicule2 = document.querySelector("#moto");

const voiture1 = new Voiture("Renault", "Kangoo", 240000, 2003, "Climatisée")
console.log(voiture1);

const moto1 = new Moto("BMW", "R1150R Rockster", 65000, 2005)

vehicule1.innerHTML = `<b>${voiture1.constructor.name} : </b> ${voiture1.marque} - ${voiture1.modele} - ${voiture1.kilometrage}km - ${voiture1.annee} - ${voiture1.clim}`
vehicule2.innerHTML = `<b>${moto1.constructor.name} : </b> ${moto1.marque} - ${moto1.modele} - ${moto1.kilometrage}km - ${moto1.annee}`;

