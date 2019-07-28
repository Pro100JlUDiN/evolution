'use strict';

const btns = document.querySelectorAll("button");
const message = document.querySelector(".message");

const coin = ["Орел","Решка"];

const score = [0, 0];

const dropCoin = function(event){
    const playerChoise = event.target.textContent;
    const random = Math.floor(Math.random() * coin.length);
    const lot = coin[random];

    let output = '';
    if(playerChoise === lot){
        output = "Выиграл!"
        score[0] ++;
    }else{
        output = "Проиграл!"
        score[1] ++;
    }

    message.innerHTML = `
    <div>Результат: ${lot}</div>
    <div>${output}</div>
    <div>Выиграл ${score[0]} раз</div>
    <div>Проиграл ${score[1]} раз</div>
    `;
};

btns.forEach(function(button){
    button.addEventListener("click", dropCoin);
});