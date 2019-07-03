'use stric';
// всплывающая тема
// alert('Поздоровался, и шо?');

let money = 1000000; 
let income = 500000;
let addExpenses = "Корм для меня, Ипотека, Корм для Кошки"; 
let deposit = false; 
let mission = 15000000; 
let period = 6;


console.log('Больше ничего не уметь.');
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(income.toString().length);

console.log("Период " + period +  " месяцев");
console.log("Цель заработать " + mission + " гривень");


console.log(addExpenses.toLowerCase().split(', ')); 

let budegetDay = money / 30;

// вопрос о месячном доходе
money = +prompt('Ваш месячный доход?');
console.log(money);

// вопрос о статьях расходов
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));

// вопрос депозите
deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

// типы данных
console.log(typeof(money), typeof(income), typeof(deposit));

// ещё 4 вопроса о статьях расходов
let firstMustExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(firstMustExpenses);

let firstExpensesPrice = +prompt('Во сколько это обойдется?');
console.log(firstExpensesPrice);

let secondMustExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(secondMustExpenses);

let secondExpensesPrice = +prompt('Во сколько это обойдется?');
console.log(secondExpensesPrice);

// рассчет сбережений за месяц
let budgetMonth = money - (firstExpensesPrice + secondExpensesPrice);
console.log(budgetMonth);

// вывод сколько месяцев нужно откладывать
console.log('цель будет достигнута через ' + Math.ceil(mission / budgetMonth) + ' месяцев.');

// сбережения в день
budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));

if(budgetDay >= 800){
    console.log('Высокий уровень дохода')
}else if(budgetDay >= 300 && budgetDay < 800){
    console.log('Средний уровень дохода');
}else if(budgetDay >= 0 && budgetDay < 300){
    console.log('Низкий уровень дохода');
}else if(budgetDay < 0){
    console.log('Что-то пошло не так')
}

