const convertPercent = (num) => num / 100; 

const calculateTip = (subtotal, percent) => (subtotal * convertPercent(percent)).toFixed(2);

const grandTotal = (tip, subtotal) => parseFloat(tip) + parseFloat(subtotal);

const splitCheck = (grandTotal, numOfPeople) => (grandTotal / numOfPeople).toFixed(2);

let form = document.getElementById("tipForm");
form.onsubmit = function (e) {
    e.preventDefault();
    
    let subtotal = parseFloat(form.billAmt.value).toFixed(2);
    let subtotalDisplay = document.createElement("li");
    subtotalDisplay.innerText = "Subtotal: $" + subtotal;

    let tipPercent = parseFloat(form.srvQual.value);
    let tipPercentDisplay = document.createElement("li");
    tipPercentDisplay.innerText = "Tip percent: " + tipPercent + "%";

    let tip = calculateTip(subtotal, tipPercent);
    let tipDisplay = document.createElement("li");
    tipDisplay.innerText = "Tip: $" + tip;

    let total = (grandTotal(tip, subtotal).toFixed(2));
    let totalDisplay = document.createElement("li");
    totalDisplay.innerText = "TOTAL: $" + total;

    let numOfPeople = parseFloat(form.personCount.value);

    let amtPerPerson = splitCheck(total, numOfPeople);
    let perPersonDisplay = document.createElement("li");
    perPersonDisplay.innerText = "Each person owes $" + amtPerPerson + ".";

    document.getElementById("results").appendChild(subtotalDisplay);
    document.getElementById("results").appendChild(tipPercentDisplay);
    document.getElementById("results").appendChild(tipDisplay);
    document.getElementById("results").appendChild(totalDisplay);
    document.getElementById("results").appendChild(perPersonDisplay);
    
    form.reset();
};