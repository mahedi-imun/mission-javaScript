document.getElementById('detail-submit-btn').addEventListener('click',function(e){
    let detailInput = document.getElementById('buyer-details-input');
    let inputValue = detailInput.value
   let buyerInfo = document.getElementById('buyer-info');
   buyerInfo.innerText = inputValue;
   detailInput.value='';
})