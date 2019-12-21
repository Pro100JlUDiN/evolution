// таймер
const countTimer = (deadline)=>{
        
    let timerHours = document.getElementById("timer-hours"),
        timerMinutes = document.getElementById("timer-minutes"),
        timerSeconds = document.getElementById("timer-seconds");

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

export default countTimer;