function buttonFunction(input,ballance ){
  const inputValue = document.getElementById(input);
  const newInputValue = parseFloat(inputValue.value);
  mainBallance()
  if(newInputValue >  )
  const depositAndWithdraw =  document.getElementById(ballance);
 if(inputValue.value > 0){
    depositAndWithdraw.innerText = newInputValue + parseFloat(depositAndWithdraw.innerText);
 }

  inputValue.value='';
  return parseFloat(newInputValue)
};
function mainBallance(input , addDepositAndWithdraw){
    let mainBallance=  document.getElementById('main-ballance');
    const mainBallanceText = mainBallance.innerText;
    const mainBallanceNumber = parseFloat(mainBallanceText);
    if(addDepositAndWithdraw == true  ){
        if(input > 0){
            mainBallance.innerText = mainBallanceNumber+ input
        }
    }
   else if(input >0 && input < mainBallanceNumber){
    mainBallance.innerText = mainBallanceNumber- input
   }
   return mainBallanceNumber
}
// deposit btn function
document.getElementById('deposit-btn').addEventListener('click',function(e){
   let newInputValue= buttonFunction('deposit-input','deposit-ballance');
   mainBallance( newInputValue ,true)
});
// withdraw btn function 
document.getElementById('withdraw-btn').addEventListener('click',function(e){
  let withdrawInput =  buttonFunction('withdraw-input','withdraw-ballance')
    mainBallance( withdrawInput ,false);
   
})