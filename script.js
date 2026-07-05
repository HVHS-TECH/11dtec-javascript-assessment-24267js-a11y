
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
    OUTPUT.innerHTML += "<h1>Here Are The available Items </h1>";
    for (let i = 0; i < itemArray.length; i++) {
        OUTPUT.innerHTML += i + ":  " + itemArray[i] + "<br>";
    }
}


function ViewItems() {
    getFormInput();
    itemlist();
    getYJInput()
    getSLInput();
    getKSMInput();
}




