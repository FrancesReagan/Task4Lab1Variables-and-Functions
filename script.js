function calculateTotalCost(price,quantity, taxRate, discount) {
  //check if price, quantity and taxRate are valid numbers//
  if(
    typeof price!=="number"||isNaN(price)||
    typeof quantity!=="number"||isNaN(quantity)||
    typeof taxRate!=="number"||isNaN(taxRate)
  ){
    return "Invalid input";
  }

  //check if dicount is provided and valid, if not set to 0//
  if(discount === undefined){
    discount = 0;
  }else if(typeof discount!=="number" || isNaN(discount)){
    return "Invalid input";
  }
//Calculate subtotal first//
const subtotal = price*quantity;

//Apply discount if any//
let discountedAmount = subtotal;
if (discount>0){
  discountedAmount=subtotal-discount;
}

//Make sure total is not negative after discount//
if(discountedAmount<0){
  discountedAmount=0;
}

//Apply tax to get final total cost//
const totalCost=discountedAmount*(1 + taxRate);

return totalCost;
}

//Function to handle the button click//
function handleCalculation(){
  //Get values from input fields//
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const taxRate = parseFloat(document.getElementById("taxRate").value);

  //Get discount value if entered, otherwise use 0//
  let discount = 0;
  const discountInput = document.getElementById("discount").value;
  if(discountInput!==""){
    discount =parseFloat(discountInput);
  }

  //Total Cost Calculate//
  const result = calculateTotalCost(price,quantity,taxRate,discount);

  //Display result//
  const resultElement = document.getElementById("result");

  if(result==="Invalid input") {
    resultElement.textContent = result;
    resultElement.style.color = "purple";//error color Purple
  
  }else{
    //result format will be currency//
    const formattedResult="$" + result.toFixed(2);
    resultElement.textContent = formattedResult;
    resultElement.style.color = "green";//success color green//
  }
}

//Event listener for when DOM is loaded to handle handleCalculation function//
document.addEventListener("DOMContentLoaded", function(){
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click",handleCalculation);
}
);
  