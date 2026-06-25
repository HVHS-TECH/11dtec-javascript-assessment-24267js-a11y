console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var products = {
    "yuja ade": { amount: 0, _price: 0},
    "strawberry,lemon ade": { amount: 0, _price: 0 },
    "Korean Strawberry Milk": { amount: 0, _price: 0 },
    "Yuja Tea (Hot)": { amount: 0, _price: 0 },
    "Ginger Honey Tea (Hot)": { amount: 0, _price: 0 },
    "Soboro bread": { amount: 0, _price: 0 },
    "Injeolmi Cream Bread": { amount: 0, _price: 0 },
    "Korean Garlic Cream": { amount: 0, _price: 0 },
     "Gochujang Bread:": { amount: 0, _price: 0 },
     "Strawberry Cheesecake:": { amount: 0, _price: 0 },
     "Red Velvet Cupcakes:": { amount: 0, _price: 0 },
     "Ham & Cheese Croissant:": { amount: 0, _price: 0 },
     "Spinach & Feta Roll:": { amount: 0, _price: 0 },
     finalnumber: 0,
};
function displayProducts(_product,_price){
    OUTPUT.innerHTML += _product + ": $" + _price.toFixed(2) + "<br>";

}

