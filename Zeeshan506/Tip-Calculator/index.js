const bill = document.getElementById("bill");
const tipAmount = document.getElementById("tipAmount");
const perPerson = document.getElementById("perPerson");
const tipButtons = document.querySelectorAll("#tips");
const customAmount = document.getElementById("customAmount");
const people = document.getElementById("people");
const error = document.getElementById("error");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  resetButton();
  customAmount.value = "";
  people.value = "1";
  bill.value = "0";
  tipAmount.textContent = "0.00";
  perPerson.textContent = "0.00";
  error.classList.add("hidden");
  people.classList.remove("outline", "outline-red-500");
});

let tipValue = 0;

people.addEventListener("input", () => {
  if (people.value === "0") {
    error.classList.remove("hidden");
    people.classList.add("outline-red-500");
  } else {
    error.classList.add("hidden");
    people.classList.remove("outline-red-500");
    calculateTip();
  }
});

customAmount.addEventListener("input", () => {
  if (customAmount.value) {
    resetButton();
    calculateTip();
  }
});

const resetButton = () => {
  tipButtons.forEach((button) => {
    button.classList.remove("bg-[#26c2ad]", "text-[#00474b]");
    button.classList.add("bg-[#00474b]", "text-white");
  });
};

const cleanTip = (tip) => {
  return tip.replace("%", "");
};

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resetButton();
    button.classList.add("bg-[#26c2ad]", "text-[#00474b]");
    button.classList.remove("bg-[#00474b]", "text-white");
    customAmount.value = "";
    tipValue = cleanTip(button.textContent);
    calculateTip();
  });
});

bill.addEventListener("input", () => {
  if (bill.value === "") {
    tipAmount.textContent = "0.00";
    perPerson.textContent = "0.00";
  } else {
    calculateTip();
  }
});

const calculateTip = () => {
  if (customAmount.value !== "") {
    total = bill.value;
    tip = Number(customAmount.value) / 100;
    finalTip = total * tip;
  } else {
    total = bill.value;
    tip = Number(tipValue) / 100;
    finalTip = total * tip;
  }
  tipAmount.textContent = finalTip.toFixed(2) || "0.00";
  if (people.value > 0) {
    perPerson.textContent = (finalTip / people.value).toFixed(2) || "0.00";
  } else {
    perPerson.textContent = "0.00";
  }
};
