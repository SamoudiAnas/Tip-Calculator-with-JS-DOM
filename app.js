var tipPercentage = 0;

var billAmount = document.getElementById("billAmount");
var billAmountValue;


var numberOfPeople = document.getElementById("numberOfPeople");
var numberOfPeopleValue;


var tipPerPerson = document.getElementById("tipPerPerson");
var tipPerPersonValue;

var totalPerPerson = document.getElementById("totalPerPerson");
var totalPerPersonValue ;














//each time we click on a percentage it sets it to the tip percentage value 
const setPercentage= (value)=>{
    //get the values
    tipPercentage = value;
    billAmountValue = billAmount.value;
    numberOfPeopleValue = numberOfPeople.value;
    tipPerPersonValue = tipPerPerson.innerText;
    
   calculateTip();
    /*
    console.log("Total per person : "+totalPerPersonValue)
    console.log("tip per person : "+ tipPerPersonValue);
    console.log("bill : " +billAmountValue);
    console.log("tip percentage : " + tipPercentage);
    console.log("number of people :" +numberOfPeopleValue);
*/

}



const calculateTip=()=>{
     //the tip calculator logic
     tipPerPersonValue = billAmountValue  * tipPercentage * numberOfPeopleValue; 
     totalPerPersonValue = tipPerPersonValue + parseInt(billAmountValue);
 
     //set results to the tip amount /person
     tipPerPerson.innerText = tipPerPersonValue.toFixed(2);
     totalPerPerson.innerText = totalPerPersonValue.toFixed(2);

}


const ListenToCustom = () =>{
    let custom = document.getElementById("customInput");
    custom.style.opacity = 1;
    console.log(custom);
    custom.addEventListener('change',()=>{
        billAmountValue = billAmount.value;
        numberOfPeopleValue = numberOfPeople.value;
        tipPerPersonValue = tipPerPerson.innerText;
        tipPercentage = parseInt(custom.value) / 100;
      
        calculateTip();
    })
} 




const Reset = ()=>{
    billAmount.value = "0";
    numberOfPeople.value = "1";
    tipPerPerson.innerText = "0.00";
}