function getInput (isAdd,productInput){
    const product= document.getElementById(productInput);
    
   if(isAdd == true){
    let productInputNumber = parseInt(product.value) + 1;
    product.value = productInputNumber
   }
   else if(product.value > 0 ){
     productInputNumber = parseInt(product.value) - 1;
     product.value = productInputNumber
   };

};
function getInputValue (productInput,productPrice,price){
    const product= document.getElementById(productInput);
    let productInputNumber = parseInt(product.value) * price;
    document.getElementById(productPrice).innerText = productInputNumber;
    calculations ()
};
function calculations (){
    let phoneTotal = document.getElementById('phone-input').value * 1219;
    let caseTotal = document.getElementById('case-input').value * 59;
    // subTotal
    let subTotal = phoneTotal + caseTotal;
    document.getElementById('sub-total').innerText = subTotal;
    // tax 
    let tax = subTotal /10;
    document.getElementById('tax').innerText = tax;
    // total 
    let total = subTotal + tax ;
    document.getElementById('total').innerText = total;
}

//phone
document.getElementById('phone-plus').addEventListener('click',function(e){
   getInput(true,'phone-input' );
   getInputValue ('phone-input','phone-price', 1219)
 
});
document.getElementById('phone-minus').addEventListener('click',function(e){
    getInput(false,'phone-input')
    getInputValue ('phone-input','phone-price',1219);
 
});

//case
document.getElementById('case-plus').addEventListener('click',function(e){
    getInput(true,'case-input');
    getInputValue ('case-input','case-price',59)
});
document.getElementById('case-minus').addEventListener('click',function(e){
    getInput(false,'case-input');
    getInputValue ('case-input','case-price',59)
});