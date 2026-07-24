
console.log("running script.js");

// OUTPUT defined
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

// Item Data
const itemArray = [
    { name: "Yuja Ade", price: 5 },
    { name: "Strawberry Lemon Ade", price: 6 },
    { name: "Korean Strawberry Milk", price: 7 }
];

//Quantities 

let YujaQTY = 0;
let slQTY = 0;
let ksmQTY = 0;

// Inputs
const YJInput = document.getElementById("YJField");
const SLInput = document.getElementById("SLField");
const KSMInput = document.getElementById("KSMField");

// Item Input Functions
function getYJInput() {
    YujaQTY = Number(YJInput.value);
    const calc = itemArray[0].price * YujaQTY;
    OUTPUT.innerHTML += "<br>Yuja Ade: $" + calc.toFixed(2);
}

function getSLInput() {
    slQTY  = Number(SLInput.value);
    const calc = itemArray[1].price * slQTY;
    OUTPUT.innerHTML += "<br>Strawberry Lemon Ade: $" + calc.toFixed(2);
}

function getKSMInput() {
    ksmQTY = Number(KSMInput.value);
    const calc = itemArray[2].price * ksmQTY;
    OUTPUT.innerHTML += "<br>Korean Strawberry Milk: $" + calc.toFixed(2);
}

// Item List
function ItemList() {
    OUTPUT.innerHTML += "<br>These Are The Items Available <br>";
    for (let i = 0; i < itemArray.length; i++) {
        OUTPUT.innerHTML += i + ": " + itemArray[i].name + "<br>";
    }
}

// Name and Money Input Functions
function getNameInput() {
    const NAME_FIELD = document.getElementById("nameField");
    const name = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Hello, " + name + "!</p>";
}

function getMoneyInput() {
    const MONEY_FIELD = document.getElementById("moneyField");
    const money = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML += "<p>You have $" + money.toFixed(2) + " to spend.</p>";
    return money;
}

// Total Calculation
function calculateTotal() {
    const total = 
    (itemArray[0].price * YujaQTY)+ 
    (itemArray[1].price * slQTY) +
    itemArray[2].price * ksmQTY;

    OUTPUT.innerHTML += "<br>Total: $" + total.toFixed(2) + "<br>";
    return total;
}

// Change Calculation
function calculateChange(money, total) {
    const change = money - total;
    OUTPUT.innerHTML += "<br>Change: $" + change.toFixed(2) + "<br>";
    return change;
    if (change > 0) {
        OUTPUT.innerHTML += "<p>Thank you for your purchase!</p>";
    } else {
        OUTPUT.innerHTML += "<p>Sorry, you do not have enough money to make this purchase.</p>";
    }
    return change;
}

// Worth Check
function worth() {
    const MONEY_FIELD = document.getElementById("moneyField");
    const OUTPUT = document.getElementById("SpaceForJavaScriptOutput");
    let money = Number(MONEY_FIELD.value);
    let total = calculateTotal();
    
    if (money >= total ()) {
        OUTPUT.innerHTML += "<p>Thank you for your purchase!</p>";
    } else {
        OUTPUT.innerHTML += "<p>Sorry, you do not have enough money to make this purchase.</p>";
    }

    return money;
}

// Order Count

let orderCount = 0;

function orderCountFunction() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    orderCount++;
    OUTPUT.innerHTML += "<br>Order Count: " + orderCount + "<br>";

    return orderCount;
}

//Checkout Button Listner
document.getElementById("checkoutButton").addEventListener("click", checkout); 

// Checkout Function
function checkout() {
    OUTPUT.innerHTML = "<hr><h2>Receipt</h2></hr>";
    const total = calculateTotal();
    const money = getMoneyInput();

    worth();
    calculateChange(money, total);
    getNameInput();

    // Print items purchased 
    OUTPUT.innnerHTML += "<br>Items Purchased:<br>";
    if (YujaQTY > 0) {
        OUTPUT.innerHTML += "Yuja Ade: " + YujaQTY + "<br>";
    } if (slQTY > 0) {
        OUTPUT.innerHTML += "Strawberry Lemon Ade: " + slQTY + "<br>";
    } if (ksmQTY > 0) {
        OUTPUT.innerHTML += "Korean Strawberry Milk: " + ksmQTY + "<br>";
    }


    if (orderCount === 0) {
        alert("You have not placed an order yet. Please select items before checking out.");
        return;
    }

    alert("Thank you for your order!");
}
