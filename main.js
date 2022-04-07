var
    submit = document.querySelector('.submit'),
    selected1 = document.getElementById('1'),
    selected2 = document.getElementById('2'),
    selected3 = document.getElementById('3'),
    selected4 = document.getElementById('4'),
    selected5 = document.getElementById('5'),
    rateChosie = document.getElementById('rate-chosie');

selected1.onclick = function (){
    selected2.className = 'circle-icon';
    selected3.className = 'circle-icon';
    selected4.className = 'circle-icon';
    selected5.className = 'circle-icon';
    selected1.classList.toggle('active');
    submit.onclick = function (){
        document.querySelector('.card-front').style.visibility = 'hidden';
        rateChosie.appendChild(document.createTextNode('1'));
        document.querySelector('.card-back').style.visibility = 'visible';
    }
}
selected2.onclick = function (){
    selected1.className = 'circle-icon';
    selected3.className = 'circle-icon';
    selected4.className = 'circle-icon';
    selected5.className = 'circle-icon';
    selected2.classList.toggle('active');
    submit.onclick = function (){
        document.querySelector('.card-front').style.visibility = 'hidden';
        rateChosie.appendChild(document.createTextNode('2'));
        document.querySelector('.card-back').style.visibility = 'visible';
    }
}
selected3.onclick = function (){
    selected1.className = 'circle-icon';
    selected2.className = 'circle-icon';
    selected4.className = 'circle-icon';
    selected5.className = 'circle-icon';
    selected3.classList.toggle('active');
    submit.onclick = function (){
        document.querySelector('.card-front').style.visibility = 'hidden';
        rateChosie.appendChild(document.createTextNode('3'));
        document.querySelector('.card-back').style.visibility = 'visible';
    }
}
selected4.onclick = function (){
    selected1.className = 'circle-icon';
    selected2.className = 'circle-icon';
    selected3.className = 'circle-icon';
    selected5.className = 'circle-icon';
    selected4.classList.toggle('active');
    submit.onclick = function (){
        document.querySelector('.card-front').style.visibility = 'hidden';
        rateChosie.appendChild(document.createTextNode('4'));
        document.querySelector('.card-back').style.visibility = 'visible';
    }
}
selected5.onclick = function (){
    selected1.className = 'circle-icon';
    selected2.className = 'circle-icon';
    selected3.className = 'circle-icon';
    selected4.className = 'circle-icon';
    selected5.classList.toggle('active');
    submit.onclick = function (){
        document.querySelector('.card-front').style.visibility = 'hidden';
        rateChosie.appendChild(document.createTextNode('5'));
        document.querySelector('.card-back').style.visibility = 'visible';
    }
}