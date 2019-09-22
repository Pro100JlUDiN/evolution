`use strict`;

let btn = document.querySelectorAll(".button");
const addBtn = document.querySelector(".add-btn"),
      content = document.querySelector(".content"),
      btnBlock = document.querySelector(".btn-block");

const changeText = (event)=>{
    content.textContent = event.target.textContent;
}

// добавление кнопки
const getButton = ()=>{
    const newButton = btn[0].cloneNode();
    let textButton = btn.length + 1;
    if(textButton < 10){
        textButton = `0${textButton}`;
    }  
    newButton.textContent = textButton;
    btnBlock.appendChild(newButton);
    btn = document.querySelectorAll(".button");
};

addBtn.addEventListener("click", getButton);

btnBlock.addEventListener("click", ()=>{
    if(!event.target.matches(".button")) return;
    changeText(event);
});
