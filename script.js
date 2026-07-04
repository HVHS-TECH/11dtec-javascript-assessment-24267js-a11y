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

const USER_ITEMS = document.getElementById("user item");

let itemArray = ["Yuja Ade", "Strawberry Lemon Ade", "Korean Strawberry Milk"];
function getFormInput() {
    let choice = USER_ITEMS.value;
    if (choice === "Yuja Ade") {
        products["yuja ade"].amount += 1;
        products["yuja ade"]._price += 5.00;
    } else if (choice === "Strawberry Lemon Ade") {
        products["strawberry,lemon ade"].amount += 1;
        products["strawberry,lemon ade"]._price += 6.00;
    } else if (choice === "Korean Strawberry Milk") {
        products["Korean Strawberry Milk"].amount += 1;
        products["Korean Strawberry Milk"]._price += 7.00;
    } else {
        OUTPUT.innerHTML = "<p>Invalid item choice. Please select a valid item.</p>";
    }
}

function itemlist() {
    
}

function getNameInput() {
  const NAME_FIELD = document.getElementById("nameField");
  let username = NAME_FIELD.value;
  OUTPUT.innerHTML = "<p>Your name is " + username + "</p>";
}


function getMoneyInput() {
  const MONEY_FIELD = document.getElementById("moneyField");
  let money = MONEY_FIELD.value;
  OUTPUT.innerHTML = "<p>You have $" + money + " in your wallet.</p>";
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
    getMoneyInput();
}