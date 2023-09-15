

function changeBodyBg(color){
    document.body.style.background = color;
}

function check() {
    var b = document.getElementById("a").value;
    var a = document.getElementById("b").value;
    if(a==b){
        let text = document.querySelector('.text');
        text.textContent = 'Покупка выполнена.';
    }else{
        if(a > b){
            let x = a - b;
            let text = document.querySelector('.text');
            text.textContent = 'Покупка выполнена, сдача - ' + x;
        }else{
            let x = b - a;
            let text = document.querySelector('.text');
            text.textContent = 'Недостаточно средств - ' + x;
        }
    }

}

