function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");
const formElt = document.querySelectorAll("form");

// form elements 
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");

// form invalid messages
const firstNameMessage = document.getElementById("first-invalid");
const lastNameMessage = document.getElementById("last-invalid");
const eMailMessage = document.getElementById("email-invalid");
const birthDateMessage = document.getElementById("birthdate-invalid");
const quantityMessage = document.getElementById("quantity-invalid");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

// validate form event
formElt.forEach(input => input.addEventListener("submit", validate));
formElt.forEach(input => input.addEventListener("invalid", errorMessage));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate form functions
function validate(e) {
  e.preventDefault();
  input.setCustomValidity('');
  input.checkValidity();
}

function errorMessage(e) {
  if (input.value === '') {
    firstNameMessage.textContent("Veuillez saisir votre Prénom");
    lastNameMessage.textContent("Veuillez saisir votre Nom");
    eMailMessage.textContent("Veuillez saisir votre email");
    birthDateMessage.textContent("Veuillez saisir votre date de naissance");
    quantityMessage.textContent("Veuillez saisir le nombre de tournoi auxquels vous avez déjà participé");
  } else {
    firstNameMessage.textContent("Votre Prénom doit contenir 2 caractères ou plus");
    lastNameMessage.textContent("Votre Nom doit contenir 2 caractères ou plus");
    eMailMessage.textContent("Veuillez saisir une adresse email valide");
    quantityMessage.textContent("Veuillez un nombre entre 0 et 99");
  }
}






