//                       -------  Tooltip Code  -------

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

let button = document.querySelector(".button");
let display = document.querySelector(".display");

//                       -------  Main function Code  -------

function hello() {
  let gross = parseFloat(document.querySelector(".annualInp").value);
  let extra = parseFloat(document.querySelector(".extra").value);
  let age = parseFloat(document.querySelector(".age").value);
  let deduction = parseFloat(document.querySelector(".deduction").value);
  let grossTooltip = document.querySelector(".grossTooltip");
  let extraTooltip = document.querySelector(".extraTooltip");
  let ageTooltip = document.querySelector(".ageTooltip");
  let deductionTooltip = document.querySelector(".deductionTooltip");
  let netIncome = gross + extra - deduction;
  let tax = 0;
  let error = false;

  if (isNaN(gross)) {
    grossTooltip.style.display = "block";
    display.innerText = "please check warnings";
    error = true;
  } else {
    grossTooltip.style.display = "none";
  }

  if (isNaN(extra)) {
    extraTooltip.style.display = "block";
    display.innerText = "please check warnings";
    error = true;
  } else {
    extraTooltip.style.display = "none";
  }

  if (isNaN(age) || age === "Select your age group") {
    ageTooltip.style.display = "block";
    display.innerText = "please check warnings";
    error = true;
  } else {
    ageTooltip.style.display = "none";
  }

  if (isNaN(deduction)) {
    deductionTooltip.style.display = "block";
    display.innerText = "please check warnings";
    error = true;
  } else {
    deductionTooltip.style.display = "none";
  }

  if (!error) {
    if (netIncome <= 800000) {
      display.innerText = "Not tax payable";
    } else if (netIncome > 800000) {
      if (age == 1) {
        tax = 0.3 * (netIncome - 800000);
        display.innerText = netIncome -  tax;
      } else if (age == 2) {
        tax = 0.4 * (netIncome - 800000);
        display.innerText = netIncome -  tax;
      } else if (age == 3) {
        tax = 0.1 * (netIncome - 800000);
        display.innerText = netIncome - tax;
      }
    }
  }
}

button.addEventListener("click", hello);
