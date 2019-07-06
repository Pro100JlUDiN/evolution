'use stric';
// приветствие
alert('Поздоровался, и шо?');

let money; 
let income = "проточка черенков для лопат";
let addExpenses = "Корм для меня, Ипотека, Корм для Кошки"; 
let deposit = false; 
let mission = 15000000; 
let period = 6;

// вопрос о месячном доходе
let start = function(){
    money = prompt('Ваш месячный доход?');
    console.log(money);
    while(isNaN(money) || money == "" || money == null){
        money = prompt('Ваш месячный доход?');
        console.log(money);
    }
}

start();

// вопрос о статьях расходов
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

// вопрос депозите
deposit = confirm('Есть ли у вас депозит в банке?');

// ещё 4 вопроса о статьях расходов за месяц
// let firstMustExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');

// let firstExpensesPrice = +prompt('Во сколько это обойдется?');

// let secondMustExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');

// let secondExpensesPrice = +prompt('Во сколько это обойдется?');

//сумма расходов за месяц
let firstMustExpenses;
let secondMustExpenses;
let getExpensesMonth = function(){
    let sum = 0;
    for(let i = 0; i < 2; i++){
        if( i === 0){
            firstMustExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');

        }else if(i === 1){
            secondMustExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
        }
        
        sum += +prompt('Во сколько это обойдется?');
    }
    return sum;
};
let costsPerMonth = getExpensesMonth();


// рассчет сбережений за месяц
let getAccumulatedMonth = function(salary, costs){
    return salary - costs;
};
let accumulatedMonth = getAccumulatedMonth(money,costsPerMonth);
console.log(accumulatedMonth);

// вывод сколько месяцев нужно откладывать
let getTargetMonth = function(target, save){
    return "Цель будет достигнута через " + Math.ceil(target / save) + " месяцев.";
};
console.log(getTargetMonth(mission, accumulatedMonth))

// сбережения в день
budgetDay = accumulatedMonth / 30;
console.log(Math.floor(budgetDay));

let showTypeOf = function(a, b, c){
    let arr = [];
    arr.push(typeof(a), typeof(b), typeof(c));
    return arr;
};
console.log(showTypeOf(money,income,deposit));
