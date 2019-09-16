window.addEventListener("DOMContentLoaded", (()=>{
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
    countTimer("1 september 2019");

    // меню
    const tuggleMenu = ()=>{
        const btnMenu = document.querySelector(".menu"),
              menu = document.querySelector("menu"),
              body = document.querySelector("body"),
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
        // невнятная хуйня (делегирование)
        body.addEventListener("click", ()=>{
            let target = event.target;
            
            if(target.closest(".menu")){
                handlerMenu();
            }
            if(target.closest(".active-menu a")){
                handlerMenu();
            }
            
            // if(target === menu){
            //     if(target.classList.contains("close-btn")){
            //         // handlerMenu();
            //         console.log("крестик")
            //     }
            // }

        });
        
        // btnMenu.addEventListener("click", ()=>{
        //     handlerMenu();
        // });
        
    };
    tuggleMenu();

    // блок с полями реквизитов
    const tugglePopUp = ()=>{
        const popUp = document.querySelector(".popup"),
              popUpBtn = document.querySelectorAll(".popup-btn"),
              popUpContent = document.querySelector(".popup-content"),
              screenHeight = screen.height,  //812
              screenWidth = screen.width;    //375
        let count = -20,
            idInterval,
            moveInterval;

        popUpBtn.forEach((elem)=>{
            elem.addEventListener("click", ()=>{
                if(screenWidth < 376 && screenHeight < 813){
                    popUp.style.display = "block";                   
                }else{
                    popUpContent.style.left = `${count}%`;
                    popUp.style.display = "block";
                    moveInterval = requestAnimationFrame(animate);
                }
            });
        });

        let animate = ()=>{
            moveInterval = requestAnimationFrame(animate);
            if(count !== 38){
                count ++;
                popUpContent.style.left = `${count}%`;
            }else{
                count = -20;
                cancelAnimationFrame(moveInterval);
            }
        };

        popUp.addEventListener("click",()=>{
            let target = event.target;
            
            if(target.classList.contains("popup-close")){
                popUp.style.display = "none";
            }else{
                target = target.closest(".popup-content");
                if(!target){
                    popUp.style.display = "none";
                }
            }

        });
    };
    tugglePopUp();

    //табы
    const tabs = ()=>{
        const tabHeader = document.querySelector(".service-header"),
              tab = tabHeader.querySelectorAll(".service-header-tab"),
              tabContent = document.querySelectorAll(".service-tab");

        const toggleTabContent = (index)=>{
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove("d-none");
                }else{
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add("d-none");               
                }
            }
        };

        tabHeader.addEventListener("click", (event)=>{
            let target = event.target;
            target = target.closest(".service-header-tab");

            if(target){
                tab.forEach((item, i)=>{
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();
}));