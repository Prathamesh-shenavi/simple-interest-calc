let SI = 0;

function submitForm(event) {
  formValidation();
  let screen = document.querySelector(".screen");
  screen.innerText = SI;
  var allInputs = document.querySelectorAll(".calc-input input");
  allInputs.forEach((singleInput) => (singleInput.value = ""));
  event.preventDefault();
}

function formValidation() {
  const principal = document.getElementById("principal").value;
  const time = document.getElementById("time").value;
  const rate = document.getElementById("rate").value;
  if (isNumber(principal) && isNumber(time) && isNumber(rate)) {
    SI = (principal * time * rate) / 100;
  } else {
    confirm("Please add valid number");
  }
}

function isValid(value) {
  return value >= 0 ? true : false;
}

function isNumber(value) {
  if (!isNaN(value) && isValid(value)) return true;
  else return false;
}

const form = document.getElementById("form");
form.addEventListener("submit", submitForm);
