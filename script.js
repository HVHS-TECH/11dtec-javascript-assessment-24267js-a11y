console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var products = {
    yujaade: { amount: 0, _price: 0}
    strawberrylemonade: {amount: 0, _price: 0}
    
}
function displayProducts(_product,_price){
OUTPUT.innerHTML += +_product +_price ;
}

function ViewitemsinCart(){
    displayProducts();
}