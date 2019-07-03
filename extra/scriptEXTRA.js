let num = 266219;
num = num.toString().split('');
console.log(num);

//из строк в числа
for(let i = 0; i < num.length; i++){
    num[i] = Number(num[i]);
}
console.log(typeof(num[1]));

//умножение элементов
let multiplication = 1;
for(let i = 0; i < num.length; i++){
    multiplication *= num[i];
}
console.log(multiplication);
let exponent = multiplication ** 3;
console.log(exponent.toString().substr(0,2));