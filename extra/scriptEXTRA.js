let num = 266219;
let strArray;
let numArray = [];
strArray = num.toString().split('');

let multiplication;
for(i = 0; i < strArray.length; i++){
    let a = Number(strArray[i]);
    numArray *= a;
    console.log(numArray);
}