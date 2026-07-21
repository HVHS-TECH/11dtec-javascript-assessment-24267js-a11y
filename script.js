
console.log("running script.js");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var username = "any";


const products = [
    "yuja ade", { amount: 0, _price: 0},
   "strawberry,lemon ade", { amount: 0, _price: 0 },
    "Korean Strawberry Milk", { amount: 0, _price: 0 },
  
];


let itemArray = ["Yuja Ade", "Strawberry Lemon Ade", "Korean Strawberry Milk"];
function getFormInput() {
    let choice = USER_ITEMS.value;
   itemArray.push(choice);
}

const USER_ITEMS = document.getElementById("user item");








function getYJInput() {
    let YJInput = document.getElementById("YJField").value;
    products["yuja ade"].amount = YJInput;
    products["yuja ade"]._price = YJInput * 5.00;
    OUTPUT.innerHTML += "<br>Yuja Ade: " + products["yuja ade"].amount + " Price: $" + products["yuja ade"]._price.toFixed(2) + "<br>";
}

function getSLInput() {
    let SLInput = document.getElementById("SLField").value;
    products["strawberry,lemon ade"].amount = SLInput;
    products["strawberry,lemon ade"]._price = SLInput * 6.00;
    OUTPUT.innerHTML += "<br>Strawberry Lemon Ade: " + products["strawberry,lemon ade"].amount + " Price: $" + products["strawberry,lemon ade"]._price.toFixed(2) + "<br>";
}

function getKSMInput() {
    let KSMInput = document.getElementById("KSMField").value;
    products["Korean Strawberry Milk"].amount = KSMInput;
    products["Korean Strawberry Milk"]._price = KSMInput * 7.00;
    OUTPUT.innerHTML += "<br>Korean Strawberry Milk: " + products["Korean Strawberry Milk"].amount + " Price: $" + products["Korean Strawberry Milk"]._price.toFixed(2) + "<br>";
}


function calculateTotal() {
    let total = products["yuja ade"]._price + products["strawberry,lemon ade"]._price + products["Korean Strawberry Milk"]._price;
    OUTPUT.innerHTML += "<br>Total: $" + total.toFixed(2) + "<br>";
    return total;
    if (total > 0) {
        OUTPUT.innerHTML += "<p>Thank you for your purchase!</p>";
    } else {
        OUTPUT.innerHTML += "<p>Sorry, you do not have enough money to make this purchase.</p>";
}


function calculateChange(money, total) {
    let change = money - total;
    OUTPUT.innerHTML += "<br>Change: $" + change.toFixed(2) + "<br>";
    return change;
    if (change > 0) {
        OUTPUT.innerHTML += "<p>Thank you for your purchase!</p>";
    } else {
        OUTPUT.innerHTML += "<p>Sorry, you do not have enough money to make this purchase.</p>";
    }
}


function getNameInput() {
    const NAME_FIELD = document.getElementById("nameField");
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let name = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Hello, " + name + "!</p>";
    
}

function getMoneyInput() {
    const MONEY_FIELD = document.getElementById("moneyField");
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let money = MONEY_FIELD.value;
    OUTPUT.innerHTML += "<p>You have $" + money + " to spend.</p>";
}

function worth() {
    const MONEY_FIELD = document.getElementById("moneyField");
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let money = Number(MONEY_FIELD.value);
    
    if (money >= calculateTotal()) {
        OUTPUT.innerHTML += "<p>Thank you for your purchase!</p>";
    } else {
        OUTPUT.innerHTML += "<p>Sorry, you do not have enough money to make this purchase.</p>";
    }

    return money;
}


function checkout() {
    calculateTotal();                                                   
    worth();
    
}
    




