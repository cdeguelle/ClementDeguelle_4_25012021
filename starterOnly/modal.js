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
const form = document.querySelectorAll("#form");
const successMessage = document.querySelectorAll("#success-message");
const successCloseBtn = document.querySelectorAll("#success-close-btn");

// form elements 
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelector("input[type=radio]");
const conditions = document.getElementById("checkbox1");

// Regex formats
const birthdateFormat = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const positiveIntegerFormat = /^\+?(0|[1-9]\d*)$/;

// form invalid messages
const firstNameMessage = document.getElementById("first-invalid");
const lastNameMessage = document.getElementById("last-invalid");
const eMailMessage = document.getElementById("email-invalid");
const birthDateMessage = document.getElementById("birthdate-invalid");
const quantityMessage = document.getElementById("quantity-invalid");
const cityMessage = document.getElementById("city-invalid");
const conditionsMessage = document.getElementById("conditions-invalid");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));
successCloseBtn.forEach(elt => elt.addEventListener("click", closeModal));

// validate form event
form.forEach(elt => elt.addEventListener("submit", validate));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  successMessage.style.display = "none";
}

// success message
function displaySuccessMessage() {
  let currentHeight = form.offsetHeight;

  form.style.display = "none";
  successMessage.style.display = "flex";
  successMessage.style.height = currentHeight + "px";
}

// validate form functions
function isFirstValid() {
  let isValid = isLongEnough(firstName.value.length, 2);
  if (isValid = false) {
    firstNameMessage.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
  }
  return isValid;
}

function isLastValid() {
  let isValid = isLongEnough(lastName.value.length, 2);
  if (isValid = false) {
    lastNameMessage.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
  }
  return isValid;
}

function isEmailValid() {
  let isValid = isStringMatchRegexFormat(eMail.value, mailFormat);
  if (isValid = false) {
    eMailMessage.innerHTML = "Veuillez entrer un format d'email valide";
  }
  return isValid;
}

function isBirthdateValid() {
  let isValid = isStringMatchRegexFormat(birthDate.value, birthdateFormat);
  if (isValid = false) {
    birthDateMessage.innerHTML = "Veuillez saisir une date de naissance valide";
  }
  return isValid;
}

function isQuantityValid() {
  let isValid = isStringMatchRegexFormat(quantity.value, positiveIntegerFormat);
  if (isValid = false) {
    quantityMessage.innerHTML = "Veuillez entrer un nombre";
  }
  return isValid;
}

function isCityValid() {
  let isValid = isRadioChecked();
  if (isValid = false) {
    cityMessage.innerHTML = "Vous devez choisir une option";
  }
  return isValid;
}

function isConditionsValid() {
  let isValid = isCheckboxChecked("checkbox1");
  if (isValid = false) {
    conditionsMessage.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions";
  }
  return isValid;
}

function validate(e) {
  e.preventDefault();
  
  let firstV = isFirstValid();
  let lastV = isLastValid();
  let emailV = isEmailValid();
  let birthdateV = isBirthdateValid();
  let quantityV = isQuantityValid();
  let cityV = isCityValid();
  let conditionsV = isConditionsValid();

  let isFormValid = firstV && lastV && emailV && birthdateV && quantityV && cityV && conditionsV;

  if (isFormValid) {
  displaySuccessMessage();
  }
}

// utils
function isStringMatchRegexFormat(str, strFormat) {
  return strFormat.test(str);
}

function isRadioChecked() {
  return document.querySelectorAll("input[type=radio]:checked").length > 0;
}

function isCheckboxChecked(id) {
  return document.getElementById(id).checked;
}

function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength;
}






