console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function displayProducts(_product,_price){
OUTPUT.innerHTML += "<p>" +_product +_price "$</p>";
}

