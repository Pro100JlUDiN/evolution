'use-stric';

function DomElement(selector, height, width, bg, fontSize, text){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
    
    let needBlock;
    let ourScript = document.querySelector("script");

    this.addBlock = function(){
        if(this.selector[0] === "."){
        needBlock = document.createElement("div");
        needBlock.className = selector.substring(1);
        }else if(this.selector[0] === "#"){
            needBlock = document.createElement("p");
        }
        document.body.insertBefore(needBlock, ourScript);
        needBlock.innerHTML = text;
        needBlock.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background-color: ${this.bg};
            font-size: ${this.fontSize}px;
            `;
    }

}
DomElement(".Cot", 100, 100, "yellow", 15, "Jeep")
// console.log(DomElement());

let wood = new DomElement("#Cot", 150, 150, "purple", 15, "Mercedes");
console.log(wood);

let woody = new DomElement("#Cot", 150, 250, "green", 15, "BUICK");
wood.addBlock();