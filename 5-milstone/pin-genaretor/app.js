function getPin(){  
    const pin = Math.round(Math.random() *10000)
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin()
    }
}

function generatePin(){
   const pin = getPin()
    document.getElementById('pin-display').value =pin;
};

document.getElementById('all-button').addEventListener('click',function(event){
    const number= event.target.innerText;
    const  calcDisplay = document.getElementById('calc-display');
    if(isNaN(number) ){
        if(number == 'C' ){
            calcDisplay.value = '';
        }
        if(number =='<'){
            
        }
    }
   else{
   
    const PreNumber= calcDisplay.value
    const newNumber = PreNumber + number;
    calcDisplay.value =newNumber
   }
    
});

function submit(){
   const pinDisplay= document.getElementById('pin-display').value ;
   const  calcDisplay = document.getElementById('calc-display').value;
   if(pinDisplay == calcDisplay){
       document.getElementById('matched').style.display='block'
       document.getElementById('no-matched').style.display='none'
   }
   else{
      document.getElementById('no-matched').style.display='block'
      document.getElementById('matched').style.display='none'
   }

}