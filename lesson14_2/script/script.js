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
    countTimer("1 october 2019");

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

        // делегирование        
        body.addEventListener("click", ()=>{
            let target = event.target;
            
            if(target.closest(".menu")){
                handlerMenu();
            }else if(target.closest(".active-menu a")){
                handlerMenu();
            }else if(menu.classList.contains("active-menu")){
                target = target.closest(".active-menu");
                if(!target){
                    handlerMenu();
                }
            }else{
                return;
            }
        });
        
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

    //слайдер
    const slider = ()=>{
        const slide = document.querySelectorAll(".portfolio-item"),
              btn = document.querySelectorAll(".portfolio-btn"),
              dotContainer = document.querySelector(".portfolio-dots"),
              slider = document.querySelector(".portfolio-content");

        let currentSlide = 0,
            interval,
            dot = document.querySelectorAll(".dot");

        
        
        const prevSlide = (elem, index, strClass)=>{            
            elem[index].classList.remove(strClass);
        };
        
        const nextSlide = (elem, index, strClass)=>{
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = ()=>{
            
            prevSlide(slide, currentSlide, "portfolio-item-active");
            prevSlide(dot, currentSlide, "dot-active");
            currentSlide ++;
            
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            
            nextSlide(slide, currentSlide, "portfolio-item-active");
            nextSlide(dot, currentSlide, "dot-active");

        };

        const startSlide = (time = 3000)=>{
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = ()=>{
            clearInterval(interval);
        };
        
        slider.addEventListener("click", (event)=>{
            event.preventDefault();

            let target = event.target;

            if(!target.matches("#arrow-right, #arrow-left, .dot")){
                return;
            }

            prevSlide(slide, currentSlide, "portfolio-item-active");
            prevSlide(dot, currentSlide, "dot-active");

            if(target.matches("#arrow-right")){
                currentSlide ++;
                if(currentSlide >= slide.length){
                    currentSlide = 0;
                }
            }else if(target.matches("#arrow-left")){
                currentSlide --;
                if(currentSlide < 0){
                    currentSlide = slide.length - 1;
                }
            }else if(target.matches(".dot")){
                dot.forEach((elem, index)=>{
                    if(elem === target){
                        currentSlide = index;
                    }
                });
            }

            nextSlide(slide, currentSlide, "portfolio-item-active");
            nextSlide(dot, currentSlide, "dot-active");
            

        });

        slider.addEventListener("mouseover", (event)=>{
            if(event.target.matches(".portfolio-btn")|| event.target.matches(".dot")){
                stopSlide();
            }
        });
        slider.addEventListener("mouseout", (event)=>{
            if(event.target.matches(".portfolio-btn")|| event.target.matches(".dot")){
                startSlide();
            }
        });

        

        const getDots = ()=>{
            let dotBlock = document.createElement("li");
                
            dotContainer.append(dotBlock);
            if(dot.length === 0){
                dotBlock.className = "dot dot-active";
            }else{
                dotBlock.className = "dot";
            }
            
            dot = document.querySelectorAll(".dot");
            
        };

        for(let i = 0; i < slide.length; i++){
            getDots();
        }
        
        
        startSlide();
        
    };
    slider();

    //смена фотографий
    const changePhoto = ()=>{
        const team = document.querySelector("#command .row");
    
        let firstLink;
        

        team.addEventListener("mouseover",()=>{
            let target = event.target;
            if(target.closest(".command__photo")){
                firstLink = target.src;
                target.src = target.dataset.img;
            }
        });
        
        team.addEventListener("mouseout",()=>{
            let target = event.target;
            if(target.closest(".command__photo")){
                target.src = firstLink;
            }
        });
            
    };       
    changePhoto();

    //калькулятор
    const calc = (price = 100)=>{
        const calcBlock = document.querySelector(".calc-block"),
              calcType = document.querySelector(".calc-type"),
              calcSquare = document.querySelector(".calc-square"),
              calcDay = document.querySelector(".calc-day"),
              calcCount = document.querySelector(".calc-count"),
              totalValue = document.getElementById("total");

        
        const countSum = ()=>{
            let total = 0,
                countValue = 1,
                dayValue = 1,
                a = 0;
                
            const typeValue = calcType.options[calcType.selectedIndex].value,
                  squareValue = calcSquare.value;
            
            if(calcCount.value > 1){
                countValue += (calcCount.value - 1) / 10;
            }

            if(calcDay.value && calcDay.value < 5){
                dayValue *= 2;
            }else if(calcDay.value && calcDay.value < 10){
                dayValue *= 1.5;
            }

            if(typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue;
                console.log(typeof total, total);
            }
            
            let priceAnimation = setInterval(()=>{
                a = +totalValue.textContent;
                if(a < total){
                    totalValue.textContent = +totalValue.textContent + 1;
                }else{
                    fuStop();
                }   
                console.log(typeof a, a);
            }, 5);


            const fuStop = ()=>{
                clearInterval(priceAnimation);
                console.log("stop");
            }
            // totalValue.textContent = total;
            
        };

        //запрет ввода букв
        calcBlock.addEventListener('input', ()=>{
            let target = event.target;
            if(target.closest("[type = number]")){
                target.value = target.value.replace(/\D/g, "");
            }
        });
        
        calcBlock.addEventListener("change", ()=>{
            let target = event.target;
            
            if(target.matches("select") || target.matches("input")){
                countSum();
            }

        });
        
    };
    calc(100);
}));
