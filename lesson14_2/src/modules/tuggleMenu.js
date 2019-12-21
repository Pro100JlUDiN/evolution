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

export default tuggleMenu;