function textElement (){
    let p=  document.getElementById('inner-text');
    p.innerText='i am using function'
    }

    document.getElementById('btn-direct').addEventListener('click',function(){
        let p=  document.getElementById('inner-text');
        p.innerText='iam using direct function'

    });

    document.getElementById('submit-btn').addEventListener('click',function(){
        let inputText = document.getElementById('input-text');
        let p=  document.getElementById('inner-text');
        p.innerText = inputText.value;
        inputText.value =" ";
    });