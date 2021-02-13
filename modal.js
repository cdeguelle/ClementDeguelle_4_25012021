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
const body = document.querySelector("body");

// form elements 
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelector("input[type=radio]");
const conditions = document.getElementById("checkbox1");

// form elements error messages
const firstNameError = document.getElementById("data-first");
const lastNameError = document.getElementById("data-last");
const eMailError = document.getElementById("data-email");
const birthDateError = document.getElementById("data-birthdate");
const quantityError = document.getElementById("data-quantity");
const cityError = document.getElementById("data-city");
const conditionsError = document.getElementById("data-conditions");

// Regex formats
const birthdateFormat = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const positiveIntegerFormat = /^\+?(0|[1-9]\d*)$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.addEventListener("click", closeModal);
successCloseBtn.addEventListener("click", closeModalSuccess);

// validate form event
form.addEventListener("submit", validate);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  successMessage.style.display = "none";
  if (window.matchMedia("(min-width: 540px)").matches) {
    body.style.position = "static";
    body.style.overflow = "hidden";
  } else {
    body.style.position = "fixed";
  }
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  body.style.position = "initial";
  body.style.overflow = "auto";
  form.style.display = "block";
}

function closeModalSuccess() {
  form.style.display = "block";
  modalbg.style.display = "none";
  successMessage.style.display = "none";
  body.style.position = "initial";
}

// success message
function displaySuccessMessage() {
  form.style.display = "none";
  successMessage.style.display = "block";
}

// validate form functions
function isFirstValid() {
  let isValid = isLongEnough(firstName.value.length, 2);
  if (isValid) {
    firstNameError.setAttribute("data-error-visible", "false");
  } else {
    firstNameError.setAttribute("data-error-visible", "true");
  }
  return isValid;
}

function isLastValid() {
  let isValid = isLongEnough(lastName.value.length, 2);
  if (isValid) {
    lastNameError.setAttribute("data-error-visible", "false");
  } else {
    lastNameError.setAttribute("data-error-visible", "true");
  }
  return isValid;
}

function isEmailValid() {
  let isValid = isStringMatchRegexFormat(eMail.value, mailFormat);
  if (isValid) {
    eMailError.setAttribute("data-error-visible", "false");
  } else {
    eMailError.setAttribute("data-error-visible", "true");
  }
  return isValid;
}

function isBirthdateValid() {
  let isValid = isStringMatchRegexFormat(birthDate.value, birthdateFormat);
  if (isValid) {
    birthDateError.setAttribute("data-error-visible", "false");
  } else {
    birthDateError.setAttribute("data-error-visible", "true");
  }
  return isValid;
}

function isQuantityValid() {
  let isValid = isStringMatchRegexFormat(quantity.value, positiveIntegerFormat);
  if (isValid) {
    quantityError.setAttribute("data-error-visible", "false");
  } else {
    quantityError.setAttribute("data-error-visible", "true");
  }
  return isValid;
}

function isCityValid() {
  let isValid = isRadioChecked();
  if (isValid) {
    cityError.setAttribute("data-error-visible", "false");
  } else {
    cityError.setAttribute("data-error-visible", "true");
  }
  return isValid;
}

function isConditionsValid() {
  let isValid = isCheckboxChecked("checkbox1");
  if (isValid) {
    conditionsError.setAttribute("data-error-visible", "false");
  } else {
    conditionsError.setAttribute("data-error-visible", "true");
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

  console.log("nom : " + firstV, "prénom : " + lastV, "email : " + emailV, "birthdate : " + birthdateV, "quantity : " + quantityV, "city : " + cityV, "conditions : " + conditionsV);
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





