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
const closeModalBtn = document.getElementById("close");
const form = document.getElementById("form");
const successMessage = document.getElementById("success-message");
const successCloseBtn = document.getElementById("success-close-btn");

// form elements 
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelector("input[type=radio]");
const conditions = document.getElementById("checkbox1");

// form elements error messages
const firstNameError = document.querySelector("#first[data-error]::after");
const lastNameError = document.querySelector("#last[data-error]::after");
const eMailError = document.querySelector("#email[data-error]::after");
const birthDateError = document.querySelector("#birthdate[data-error]::after");
const quantityError = document.querySelector("#quantity[data-error]::after");
const cityError = document.querySelector("#city[data-error]::after");
const conditionsError = document.querySelector("#checkbox1[data-error]::after");

// Regex formats
const birthdateFormat = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const positiveIntegerFormat = /^\+?(0|[1-9]\d*)$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.addEventListener("click", closeModal);
successCloseBtn.addEventListener("click", closeModal);

// validate form event
form.addEventListener("submit", validate);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  successMessage.style.display = "none";
}

// close modal form
function closeModal() {
  if (isFormValid = true) {
    modalbg.style.display = "none";
    successMessage.style.display = "none";
  }
}

// success message
function displaySuccessMessage() {

  form.style.display = "none";
  successMessage.style.display = "block";
}

// validate form functions
function isFirstValid() {
  let isValid = isLongEnough(firstName.value.length, 2);
  return isValid;
}

function isLastValid() {
  let isValid = isLongEnough(lastName.value.length, 2);
  return isValid;
}

function isEmailValid() {
  let isValid = isStringMatchRegexFormat(eMail.value, mailFormat);
  return isValid;
}

function isBirthdateValid() {
  let isValid = isStringMatchRegexFormat(birthDate.value, birthdateFormat);
  return isValid;
}

function isQuantityValid() {
  let isValid = isStringMatchRegexFormat(quantity.value, positiveIntegerFormat);
  return isValid;
}

function isCityValid() {
  let isValid = isRadioChecked();
  return isValid;
}

function isConditionsValid() {
  let isValid = isCheckboxChecked("checkbox1");
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






