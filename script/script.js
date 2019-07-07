"use stric";
// приветствие
alert("Поздоровался, и шо?");

let money, 
    income = "проточка черенков для лопат",
    addExpenses = "Корм для меня, Ипотека, Корм для Кошки", 
    deposit = false, 
    mission = 15000000, 
    period = 6;

// вопрос о месячном доходе
let start = function(){
    do{
        money = prompt("Ваш месячный доход?");
    }
    while(isNaN(money) || money == "" || money == null)
    return +money;
}

start();

// вопрос о статьях расходов
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "кошка, собака, интернет");

// вопрос депозите
deposit = confirm("Есть ли у вас депозит в банке?");

//сумма расходов за месяц
let firstMustExpenses,
    secondMustExpenses;
let getExpensesMonth = function(){
    let sum = 0;
    for(let i = 0; i < 2; i++){
        if(i === 0){
            firstMustExpenses = prompt("Какие обязательные ежемесячные расходы у вас есть?", "кошка, собака, жена");

        }else if(i === 1){
            secondMustExpenses = prompt("Какие обязательные ежемесячные расходы у вас есть?", "магазин, интернет");
        }
        
        
        sum += +prompt("Во сколько это обойдется?");
        while(isNaN(sum) || sum == "" || sum == null){
            sum += +prompt("Во сколько это обойдется?");
        }
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
    let charge = Math.ceil(target / save);
    if(charge < 0){
        return "Цель не будет достигнута.";
    }
    return "Цель будет достигнута через " + charge + " месяцев.";
    
};
console.log(getTargetMonth(mission, accumulatedMonth))

// сбережения в день
let getBudgetDay = function(save, month){
    let savePerDay = Math.floor(save / month);
    if(savePerDay < 0){
        return "Что-то пошло не так!";
    }
    return savePerDay;
}
let budgetDay = getBudgetDay(accumulatedMonth, 30);
console.log(budgetDay);

let showTypeOf = function(a, b, c){
    let arr = [];
    arr.push(typeof(a), typeof(b), typeof(c));
    return arr;
};
console.log(showTypeOf(money,income,deposit));

//вывод об уровне дохода
let getStatusIncome = function(incomeLvl){
    if(incomeLvl >= 800){
        return ('Высокий уровень дохода');
    }else if(incomeLvl >= 300){
        return ('Средний уровень дохода');
    }else if(incomeLvl >= 0){
        return ('Низкий уровень дохода');
    }else if(incomeLvl < 0){
        return ('Что-то пошло не так');
    }
};
let statusIncome = getStatusIncome(budgetDay);
console.log(statusIncome);
