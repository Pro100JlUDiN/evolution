'use stric';

let arr = ["113","72","493","584","25","36","267"];

for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf("2",0) == 0 || arr[i].indexOf("4",0) == 0){
        console.log(arr[i]);
    }
}

let simpleNumber = [];
let rarec = 299;
console.log("Делители этого числа: 1 и " + 2);
console.log("Делители этого числа: 1 и " + 3);
for(let i = 2; i < rarec; i++){
    
    if(i ** 2 % 24 == 1){
        console.log("Делители этого числа: 1 и " + i);
    }
}
console.log(simpleNumber);

// любое простое число возведенное в квадрат будет кратно 24 с остатком 1 (кроме 2,3 они слишком маленькие)