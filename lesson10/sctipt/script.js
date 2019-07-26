'use-stric';


let blockDiv = document.createElement("div");
let ourScript = document.querySelector("script");


let blockParagrapg = document.createElement("p");


function DomElement(selector, heigth, width, bg, fontSize){

    // this.selector = selector;
    if(selector[0] === "."){
        blockDiv.className = selector.substring(1); 
        document.body.insertBefore(blockDiv, ourScript);

        blockDiv.style.cssText = 
        "height:" + heigth + "px;" +
        "width:" + width + "px;" +
        "background-color: "+ bg+";" +
        "font-size:" + fontSize + "px;"

        blockDiv.textContent = "Йоу КУ!";
    }else if(selector[0] === "#"){
        blockParagrapg.id = selector.substring(1);
        document.body.insertBefore(blockParagrapg, ourScript);

        blockParagrapg.style.cssText = 
        "height:" + heigth + "px;" +
        "width:" + width + "px;" +
        "background-color: "+ bg+";" +
        "font-size:" + fontSize + "px;"
        blockParagrapg.textContent = "Да Нет";
    }
    
 
}



let house = new DomElement("#NoDa", 100, 100, "green", 32);


