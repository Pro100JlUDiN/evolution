'use stric';
// приветствие
alert('Поздоровался, и шо?');

let money = 1000000; 
let income = "проточка черенков для лопат";
let addExpenses = "Корм для меня, Ипотека, Корм для Кошки"; 
let deposit = false; 
let mission = 15000000; 
let period = 6;

let budegetDay = money / 30;

// вопрос о месячном доходе
money = +prompt('Ваш месячный доход?');

// вопрос о статьях расходов
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

// вопрос депозите
deposit = confirm('Есть ли у вас депозит в банке?');

// ещё 4 вопроса о статьях расходов за месяц
let firstMustExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');

let firstExpensesPrice = +prompt('Во сколько это обойдется?');

let secondMustExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');

let secondExpensesPrice = +prompt('Во сколько это обойдется?');

// сумма расходов за месяц
let getExpensesMonth = function(first, second){
    return first + second;
}
let costsPerMonth = getExpensesMonth(firstExpensesPrice,secondExpensesPrice);


// рассчет сбережений за месяц
let getAccumulatedMonth = function(salary, costs){
    return salary - costs;
}
let accumulatedMonth = getAccumulatedMonth(money,costsPerMonth);
console.log(accumulatedMonth);

// вывод сколько месяцев нужно откладывать
let getTargetMonth = function(target, save){
    return "Цель будет достигнута через " + Math.ceil(target / save) + " месяцев.";
}
console.log(getTargetMonth(mission, accumulatedMonth))

// сбережения в день
budgetDay = accumulatedMonth / 30;
console.log(Math.floor(budgetDay));

let showTypeOf = function(a, b, c){
    let arr = [];
    arr.push(typeof(a), typeof(b), typeof(c));
    return arr;
}
console.log(showTypeOf(money,income,deposit));


