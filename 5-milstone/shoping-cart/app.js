function updating(isIncreasing,input,product,price){
    let productInput = document.getElementById(input);
    let productInputValue = productInput.value;
   if(isIncreasing == true){
    productInputValue = parseInt(productInputValue) +1;
   }
   else{
    if(productInputValue > 0){
        productInputValue = parseInt(productInputValue) - 1;
    }
   }
   productInput.value = productInputValue
  let priceTotal = document.getElementById(product); 
  priceTotal.innerText = productInputValue * price;
  calculation();
};
// phone
document.getElementById('phone-plus').addEventListener('click',function(e){
   updating(true , 'phone-input','phone-price',1219);
});
document.getElementById('phone-minus').addEventListener('click',function(e){
    updating(false,'phone-input','phone-price',1219)
})

// case 
document.getElementById('case-plus').addEventListener('click',function(e){
    updating(true,'case-input','case-price',59)
});
document.getElementById('case-minus').addEventListener('click',function(e){
    updating(false,'case-input','case-price' ,59)
});

// sub total, tax , total , calculation

function getInputValues(product){
   let productInput= document.getElementById(product);
   let productQuantity = parseInt(productInput.value);

    return productQuantity
};

function calculation(){
   let caseTotal = getInputValues('case-input') * 59;
   let phoneTotal= getInputValues('phone-input') *1219
   // sub total 
   let subTotal = caseTotal + phoneTotal;
    document.getElementById('sub-total').innerText=subTotal;

    //tax
    let tax = subTotal /10;
    document.getElementById('tax').innerText = tax;

    // total
    let total = subTotal + tax;
    document.getElementById('total').innerText=total;
}