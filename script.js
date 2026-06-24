console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var products = {
    YujaAde:
    {amount: 0, price: 0}
}
function displayProducts(_product,_price){
OUTPUT.innerHTML += +_product +_price ;
}

function ViewitemsinCart(){
    displayProducts();
}