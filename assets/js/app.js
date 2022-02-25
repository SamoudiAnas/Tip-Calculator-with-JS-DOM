var tipPercentage = 0;

var billAmount = document.getElementById("billAmount");
var billAmountValue;

var numberOfPeople = document.getElementById("numberOfPeople");
var numberOfPeopleValue;

var tipPerPerson = document.getElementById("tipPerPerson");
var tipPerPersonValue;

var totalPerPerson = document.getElementById("totalPerPerson");
var totalPerPersonValue;

//each time we click on a percentage it sets it to the tip percentage value
const setPercentage = (value) => {
  //get the values

  //tip value
  tipPercentage = value;

  //bill value from bill input
  billAmountValue = billAmount.value;

  //number of people from number of people input
  numberOfPeopleValue = numberOfPeople.value;

  //get the tip person element in html to edit later
  tipPerPersonValue = tipPerPerson.innerText;

  calculateTip();
};

const calculateTip = () => {
  //the tip calculator logic
  tipPerPersonValue = billAmountValue * tipPercentage * numberOfPeopleValue;
  totalPerPersonValue = tipPerPersonValue + parseInt(billAmountValue);

  //set results to the tip amount /person
  tipPerPerson.innerText = tipPerPersonValue.toFixed(2);
  totalPerPerson.innerText = totalPerPersonValue.toFixed(2);
};

const listenToCustom = () => {
  let custom = document.getElementById("customInput");
  custom.style.opacity = 1;

  custom.addEventListener("change", () => {
    billAmountValue = billAmount.value;
    numberOfPeopleValue = numberOfPeople.value;
    tipPerPersonValue = tipPerPerson.innerText;
    tipPercentage = parseInt(custom.value) / 100;

    calculateTip();
  });
};

const reset = () => {
  billAmount.value = "0";
  numberOfPeople.value = "1";
  tipPerPerson.innerText = "0.00";
};
