console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function displayProducts(_product,_price){
OUTPUT.innerHTML += +_product +_price ;
}

function ViewitemsinCart(){
    displayProducts();
}