console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var username = "any"









getmoneyInput(money);
getNameInput(username);


var products = {
    "yuja ade": { amount: 0, _price: 0},
    "strawberry,lemon ade": { amount: 0, _price: 0 },
    "Korean Strawberry Milk": { amount: 0, _price: 0 },
     finalnumber: 0,
};

function getNameInput() {
  const NAME_FIELD = document.getElementById("nameField");
  let username = NAME_FIELD.value;
  OUTPUT.innerHTML = "<p>Your name is " + username + "</p>";
}


function getmoneyInput() {
  const MONEY_FIELD = document.getElementById("MoneyField");
  let money = MONEY_FIELD.value;
  OUTPUT.innerHTML = "<p>You have $" + money + " in pocket money.</p>";
}


function items() {
    OUTPUT.innerHTML += "<h1>Here Are The Items in your cart</h1>";
}
function displayProducts(_product,_price){
    OUTPUT.innerHTML += _product + ": $" + _price.toFixed(2) + "<br>";
    
}


function ViewitemsinCart() {
    items();
    getNameInput();
    getmoneyInput();
}