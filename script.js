
console.log("running script.js");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");




let yujaAdeAmount = 0;
let strawberryLemonAdeAmount = 0;
let koreanStrawberryMilkAmount = 0;


  const YJInput = document.getElementById("YJField");

function getYJInput() {
  let input = YJInput.value;
    
  let calc = itemArray[0].price * input;
   
    OUTPUT.innerHTML += "<br>Yuja Ade: $" + calc;
}


 const SLInput = document.getElementById("SLField");
function getSLInput(){
    let input = SLInput.value;
   
    let calc = itemArray[1].price * input;
    OUTPUT.innerHTML += "<br>Strawberry Lemon Ade: $" + calc;
}
   
const KSMInput = document.getElementById("KSMField");

function getKSMInput(){
    let input = KSMInput.value;
    
    let calc = itemArray[2].price * input;
    OUTPUT.innerHTML += "<br>Korean Strawberry Milk: $" + calc;
}
   
        
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


function ItemList() {
     OUTPUT.innerHTML += "<br>These Are The Items Availabile <br>";
    for (i=0; i<itemArray; i++)){
        console.log OUTPUT.innerHTML += i + ":" + itemArray[i].name + "<br>" 
}
}

function calculateTotal() {
    let total = itemArray[0].price + itemArray[1].price + itemArray[2].price;
    OUTPUT.innerHTML += "<br>Total: $" + total.toFixed(2) + "<br>";
    return total;
    if (total > 0) {
        OUTPUT.innerHTML += "<p>Thank you for your purchase!</p>";
    } else {
        OUTPUT.innerHTML += "<p>Sorry, you do not have enough money to make this purchase.</p>";
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


let orderCount = 0;
function orderCountFunction() {
    orderCount++;
    OUTPUT.innerHTML += "<br>Order Count: " + orderCount + "<br>";
    return orderCount;
}

document.getElementById("checkoutButton").addEventListener("click", checkout);

function checkout() {
    calculateTotal();                                                   
    worth();
    calculateChange();
    getMoneyInput();
    getNameInput();
   
    if (orderCount == 0) {
        alert("You have not placed an order yet. Please select items before checking out.");
        return;

        if (orderCount > 0) {
            alert("Thank you for your order!");
        }
   }
}
}
