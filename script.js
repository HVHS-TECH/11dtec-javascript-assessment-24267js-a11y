
console.log("running script.js");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var username = "any";


let yujaAdeAmount = 0;
let strawberryLemonAdeAmount = 0;
let koreanStrawberryMilkAmount = 0;


let itemArray = [
    {name: "Yuja Ade",
     price: 5,
     },

      {name: "Strawberry Lemon Ade",
     price: 6,
     },
      {name:"Korean Strawberry Milk ",
     price: 7,
     }
    
    ];






function GetformInput() {
    let choice = USER.ITEM.value;
    itemArray.push(choice)
    OUTPUT.innerHTML += "<center><p>Here are the items available</p></center>";
} 

function ItemList() {
     OUTPUT.innerHTML += "<br>These Are The Items Availabile <br>";
    for(i=0; i<itemArray.length; i++){
        OUTPUT.innerHTML += i + ":" + itemArray[i] + "<br>" 
}
}





  const YJInput = document.getElementById("YJField")
function getYJInput() {
  let input = YJInput.value;
    
  let calc = itemArray[0].price * input;
   
    OUTPUT.innerHTML += "<br>Yuja Ade: $" + calc;
}



function getSLInput(){
    let SLInput = document.getElementById("SLField").value;
    items[1].amount = SLInput;
    items[1]._price = SLInput * 6.00;
    OUTPUT.innerHTML += "<br>Strawberry Lemon Ade: " + items[1].amount + " Price: $" + items[1]._price.toFixed(2) + "<br>";
}

function getKSMInput(){
    let KSMInput = document.getElementById("KSMField").value;
    items[2].amount = KSMInput;
    items[2]._price = KSMInput * 7.00;
    OUTPUT.innerHTML += "<br>Korean Strawberry Milk: " + items[2].amount + " Price: $" + items[2]._price.toFixed(2) + "<br>";
}


function calculateTotal() {
    let total = items[0]._price + items[1]._price + items[2]._price;
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

document.getElementById(checkout());

function checkout(){
    calculateTotal();                                                   
    worth();
    calculateChange();
    getMoneyInput();
    getNameInput();
}
}

