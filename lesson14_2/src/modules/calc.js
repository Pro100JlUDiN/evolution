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
        }

        const fuStop = ()=>{
            clearInterval(priceAnimation);
        };
        
        let priceAnimation = setInterval(()=>{
            a = +totalValue.textContent;
            if(a < total){
                totalValue.textContent = +totalValue.textContent + 1;
            }else{
                fuStop();
            }   
        }, 3);
        
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
            totalValue.innerHTML = 0;
            countSum();
        }

    });
    
};

export default calc;