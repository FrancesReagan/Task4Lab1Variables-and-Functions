function calculateTotalCost(price,quantity, taxRate, discount)
  //check if price, quantity and taxRate are valid numbers//
  if(
    typeof price!=="number"||isNaN(price)||
    typeof quantity!=="number"||isNaN(quantity)||
    typeof taxRate!=="number"||isNaN(taxRate)
  ){
    return "INVALID INPUT.";
  }

  //check if dicount is provided and valid, if not set to 0//
  if(discount === undefined){
    discount = 0;
  }else if(typeof discount!=="number" || isNaN(discount)){
    return "INVALID INPUT";
  }


  }