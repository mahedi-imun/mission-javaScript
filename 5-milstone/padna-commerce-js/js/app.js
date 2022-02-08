// all h2 colour 
let h2Colour = document.getElementsByTagName('h2');
for (let color of h2Colour){
    color.style.color='blue'
};
// add section background colour 
document.getElementById('back-pack').style.backgroundColor='tomato';
// add all card border radius 30 px;
let borderCard= document.getElementsByClassName('card');
for (let border of borderCard){
    border.style.borderRadius = "30px";
}
// menu btn click event add 

document.getElementById('menu-btn').addEventListener('click',function(){
    console.log('clicked')
})

// buy now btn clicked and delete card
let buyNowBtn= document.getElementsByClassName('btn-dark');
for(let btn of  buyNowBtn){
    btn.addEventListener('click',function(e){
        let cards = document.getElementsByClassName('card')
        for (let allCards of cards){
            allCards.style.display='none'

        }
    })
}

// select btn by email 
 document.getElementById('email-input').addEventListener('keyup', function(e){
    if(e.target.value == 'email'){
        document.getElementById('email-btn').removeAttribute('disabled')
    }
 })