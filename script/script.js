let money = 1000000; 
let income = 'вытачивание череков для лопат';
let addExpenses = "Корм для меня, Ипотека, Корм для Кошки"; 
let deposit = false; 
let mission = 15000000; 
let period = 6;

// всплывающая тема
// alert('Поздоровался, и шо?');

console.log('Больше ничего не уметь.');
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(income.toString().length);

console.log("Период " + period +  " месяцев");
console.log("Цель заработать " + mission + " гривень");


console.log(addExpenses.toLowerCase().split(', ')); 

let budegetDay = money / 30;
console.log(budegetDay);