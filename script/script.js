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

// типы данных
console.log(typeof(money), typeof(income), typeof(deposit));

// ещё 4 вопроса о статьях расходов за месяц
let firstMustExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(firstMustExpenses);

let firstExpensesPrice = +prompt('Во сколько это обойдется?');
console.log(firstExpensesPrice);

let secondMustExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(secondMustExpenses);

let secondExpensesPrice = +prompt('Во сколько это обойдется?');
console.log(secondExpensesPrice);

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
console.log(getTargetMonth(mission, savings))

// сбережения в день
budgetDay = accumulatedMonth / 30;
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


// подсказки из видоса

// let myFun = function(a, b, plus, minus){
//     let res = (a > b) ? minus(a, b) : plus(a, b);
//     console.log(res);
// }

// myFun(
//     5,
//     5,
//     function(a, b){return a + b;},
//     function(a, b){return a - b;}
// );


// let hello  = function(name){
//     return 'Hello ' + name;
// }

// console.log(hello('DOdique'));

// // воспроизвести функцию с определением статуса пользователя

// let userStatus = function(userData){
//     if(userData === "admin"){
//         return "Администратор";
//     }else{
//         return "Пользователь";
//     }
// }

// let userName = function(name, callback){
//     let status = "user";
//     if(name === "Лёха" || name === "Юра"){
//         status = "admin";
//     }
//     return callback(status);
// }

// console.log(userName("я", userStatus));