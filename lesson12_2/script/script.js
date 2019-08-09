"use strict";
function qlity(){
    // let block = document.createElement("div");
    // let ourScript = document.querySelector("script");

    // document.body.insertBefore(block, ourScript);

    let date = new Date();

    // выбор приветствия
    function choiceGreeting(){
        let block = document.createElement("div");
        let ourScript = document.querySelector("script");
    
        document.body.insertBefore(block, ourScript);

        let hoursNow = date.getHours();
        const greeting = ["Доброй ночи", "Доброе утро", "Добрый день", "Добрый вечер"];

        if(hoursNow <= 5){
            document.body.insertBefore(block, ourScript);
            block.textContent = greeting[0];
        }else if(hoursNow > 5 && hoursNow <= 12){
            document.body.insertBefore(block, ourScript);
            block.textContent = greeting[1];
        }else if(hoursNow > 12 && hoursNow <= 17){
            document.body.insertBefore(block, ourScript);
            block.textContent = greeting[2];
        }else{
            document.body.insertBefore(block, ourScript);
            block.textContent = greeting[3]; 
        }
    }
    choiceGreeting();

    // выбор дня недели
    function choiceWeek(){
        let block = document.createElement("div");
        let ourScript = document.querySelector("script");
    
        document.body.insertBefore(block, ourScript);

        const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

        let dayOfWeek = date.getDay();
        document.body.insertBefore(block, ourScript);
        block.textContent = `Сегодня: ${week[dayOfWeek]}`;
    }
    choiceWeek();

    // вывод времени
    function choiceTime(){
        let block = document.createElement("div");
        let ourScript = document.querySelector("script");
    
        document.body.insertBefore(block, ourScript);

        let timeNow = date.toLocaleTimeString("en");
        document.body.insertBefore(block, ourScript);
        block.textContent = `Текущее время: ${timeNow}`;
    }
    choiceTime();
    // таймер
    function countTimer(deadline){ 
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds =  Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours =  Math.floor(timeRemaining / 60 / 60),
            days =  Math.floor((timeRemaining / 60 / 60) / 24);

            return days;
            
        
    }
    countTimer();

    // вывод сколько дней осталось до нового года
    function howManyDays(){
        let block = document.createElement("div");
        let ourScript = document.querySelector("script");

        document.body.insertBefore(block, ourScript);
        
        const toNewYear = countTimer("1 january 2020");
        
        if(toNewYear % 10 === 1){
            document.body.insertBefore(block, ourScript);
            block.textContent = `До нового года осталось ${toNewYear} день`;
        }else if(toNewYear % 10 === 2 || toNewYear % 10 === 3 || toNewYear % 10 === 4){
            document.body.insertBefore(block, ourScript);
            block.textContent = `До нового года осталось ${toNewYear} дня`;
        }else{
            document.body.insertBefore(block, ourScript);
            block.textContent = `До нового года осталось ${toNewYear} дней`;
        }
    }
    howManyDays();

}
qlity();

// console.log(timeNow);