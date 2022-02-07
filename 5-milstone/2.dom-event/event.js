
 function clickYellow(){
    document.body.style.backgroundColor="yellow";
}
function clickRed(){
    document.body.style.backgroundColor="red"
}

let greenBtn = document.getElementById('green-btn');
    greenBtn.onclick= greenButton;
function greenButton(){
    document.body.style.backgroundColor='green';
}


let blueBtn = document.getElementById('blue-btn');
blueBtn.onclick = function(){
    document.body.style.backgroundColor='blue';
}
let hotPink = document.getElementById('hotPink-btn');


hotPink.addEventListener('click',function (){
    document.body.style.backgroundColor='hotPink'
})