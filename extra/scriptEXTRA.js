'use stric';

let myFunction = function(theOne){
    let str = "str";
    if(typeof theOne !== typeof str){
        return "Не строка!";
    }
    if(theOne.length >= 30){
        theOne = theOne.substr(0, 30) + "...";
    }
    return theOne = theOne.trim();

}
console.log(myFunction(""));