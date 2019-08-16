window.addEventListener("DOMContentLoaded", function(){
    "use strict";
    
    // таймер
    const countTimer = (deadline)=>{
        
        let timerHours = document.querySelector("#timer-hours"),
            timerMinutes = document.querySelector("#timer-minutes"),
            timerSeconds = document.querySelector("#timer-seconds");

        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds =  Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours =  Math.floor(timeRemaining / 60 / 60);

            return{seconds, minutes,  hours, timeRemaining};
        }
        
        
        function updateClock(){
            let timer = getTimeRemaining();
            let idInterval = 0;
            
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            
            if(timerHours.textContent.length < 2){
                timerHours.textContent = `0${timer.hours}`;
            }
            if(timerMinutes.textContent.length < 2){                
                timerMinutes.textContent = `0${timer.minutes}`;
            }
            if(timerSeconds.textContent.length < 2){
                timerSeconds.textContent = `0${timer.seconds}`;
            }
            if(timer.timeRemaining > 0){
                idInterval = setInterval(updateClock, 1000);
            }else if(timer.timeRemaining < 0){
                clearInterval(idInterval);

                timerHours.textContent = "00";
                timerMinutes.textContent = "00";
                timerSeconds.textContent = "00";
            }
        }            
            
        updateClock();
    };
    countTimer("8 august 2019 ");

    // меню
    const tuggleMenu = ()=>{
        const btnMenu = document.querySelector(".menu"),
              menu = document.querySelector("menu"),
              btnClose = document.querySelector(".close-btn"),
              menuItems = document.querySelectorAll("ul > li"),
              screenHeight = screen.height,  //812
              screenWidth = screen.width;    //375

        //добавление классов с анимацией или без
        const handlerMenu = ()=>{
            if(screenWidth < 376 && screenHeight < 813){
                if(!menu.style.transform || menu.style.transform === `translateX(-100%)`){
                    menu.style.transform = `translateX(0%)`;
                }else{
                    menu.style.transform = `translateX(-100%)`;
                }
                
            }else{
                menu.classList.toggle("active-menu");
            }
        };

        btnMenu.addEventListener("click", ()=>{
            handlerMenu();
        });

        btnClose.addEventListener("click",()=>{
            handlerMenu();
        });
        
        menuItems.forEach((elem)=>{
            elem.addEventListener("click",()=>handlerMenu());
        });

    };
    tuggleMenu();

    // блок с полями реквизитов
    const tugglePopUp = ()=>{
        const popup = document.querySelector(".popup"),
              popUpBtn = document.querySelectorAll(".popup-btn"),
              popUpClose = document.querySelector(".popup-close");

        popUpBtn.forEach((elem)=>{
            elem.addEventListener("click", ()=>{
                popup.style.display = "block";
            });
        });
        popUpClose.addEventListener("click",()=>{
            popup.style.display = "none";
        });
    };
    tugglePopUp();
});