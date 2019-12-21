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

export default tugglePopUp;