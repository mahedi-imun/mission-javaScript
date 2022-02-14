// memory ssd , and delivery price add to inner text
function productSelect(memorySsdAnDelivery,price){
    //memory and storage 
    let memoryStorageCostDeliveryCost =  document.getElementById(memorySsdAnDelivery);
    memoryStorageCostDeliveryCost.innerText = price;
};
// Best Price Extra Memory Cost Extra Storage Cost Delivery Charge total calculations 
 function calculations (){
    let bestPrice = document.getElementById('best-price');
    let bestPriceTotal = parseInt(bestPrice.innerText);

    let memoryCost= document.getElementById('memory-cost');
    let memoryCostTotal = parseInt(memoryCost.innerText);

    let storageCost = document.getElementById('storage-cost');
    let storageCostTotal = parseInt(storageCost.innerText);

    let deliveryCost = document.getElementById('delivery-cost');
    let deliveryCostTotal = parseInt(deliveryCost.innerText);

    let totalPrice = bestPriceTotal + memoryCostTotal+ storageCostTotal + deliveryCostTotal;

    let grandTotal = document.getElementById('total-price');
    grandTotal.innerText =totalPrice
 
 };
// event handler function
function clickHandler(storage , product, price){
    document.getElementById(storage ).addEventListener('click',function(e){
        productSelect(product,price);

        // call to total calculations 
        calculations()
    });
};
//call regular memory
clickHandler('eightGB','memory-cost',0);
//call extra memory
clickHandler('sixteenGB','memory-cost',100);
//call regular ssd
clickHandler('ssd1','storage-cost',0);
//call extra ssd
clickHandler('ssd2','storage-cost',250);
clickHandler('ssd3','storage-cost',300);
//call delivery 
clickHandler('free-delivery','delivery-cost',0);
clickHandler('paid-delivery','delivery-cost',30);
