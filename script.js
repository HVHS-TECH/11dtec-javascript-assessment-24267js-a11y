
console.log("running script.js");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var username = "any";




var products = {
    "yuja ade": { amount: 0, _price: 0},
    "strawberry,lemon ade": { amount: 0, _price: 0 },
    "Korean Strawberry Milk": { amount: 0, _price: 0 },
     finalnumber: 0,
};

const USER_ITEMS = document.getElementById("user item");

let itemArray = ["Yuja Ade", "Strawberry Lemon Ade", "Korean Strawberry Milk"];
function getFormInput() {
    let choice = USER_ITEMS.value;
   itemArray.push(choice);
}

function itemlist() {
    OUTPUT.innerHTML += "<h1>Your Selected Items</h1>";
    for (let i = 0; i < itemArray.length; i++) {
        OUTPUT.innerHTML += i + ":  " + itemArray[i] + "<br>";
    }
}


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

function ViewItems() {
    itemlist();
    
}

    




