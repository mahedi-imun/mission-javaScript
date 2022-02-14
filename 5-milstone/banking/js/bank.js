
function getInputValue(inputId){
    let depositInput = document.getElementById(inputId);
    let depositInputText = parseFloat(depositInput.value);
     //clear input value 
     depositInput.value = '';
     return depositInputText
    
};

function depositAndWithdraw ( balance ,depositInputText){
    let depositBallance =  document.getElementById(balance);
    let depositBallanceText = parseFloat(depositBallance.innerText);
    depositBallance.innerText = depositInputText +depositBallanceText;
}
function mainBallanceUpdate(depositInputText, addDeposit){
    let mainBallance= document.getElementById('main-ballance');
    let mainBallanceText = mainBallance.innerText;
    if(addDeposit == true){
        mainBallance.innerText = parseFloat(depositInputText)+ parseFloat(mainBallanceText);
    }
    else{
        mainBallance.innerText =  parseFloat(mainBallanceText) -parseFloat(depositInputText);
    }
}
document.getElementById('deposit-btn').addEventListener('click',function(e){
    let depositInputText = getInputValue('deposit-input');
// call function for deposit
    if(depositInputText > 0){
        depositAndWithdraw( 'depositBallance',depositInputText);
        mainBallanceUpdate(depositInputText,true)
    }
});
// withdraw money 
document.getElementById('withdraw-btn').addEventListener('click',function(e){
   let withdrawInputText = getInputValue('withdraw-input')
 // call function for withdraw 
    let mainBallance= document.getElementById('main-ballance');
    
    let mainBallanceText = mainBallance.innerText;
    if( withdrawInputText >0 && mainBallanceText  > withdrawInputText){
        depositAndWithdraw('withdraw-ballance',withdrawInputText);
        mainBallanceUpdate(withdrawInputText,false)
    }
})
