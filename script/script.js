"use stric";
// приветствие
alert("Поздоровался, и шо?");

let money; 
// вопрос о месячном доходе
let start = function(){
        do{
            money = prompt("Ваш месячный доход?");
        }
        while(isNaN(money) || money == "" || money == null)
        return +money;
    };

start();


//объект из видео 6 урока
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 5000000,
    period: 3,
    asking: function(){
        let addExpenses = "Корм для меня,Ипотека,Корм для Кошки";
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm("Есть ли у вас депозит в банке?");

        //сумма расходов за месяц
        let firstMustExpenses,
            secondMustExpenses;
        let sum1 = 0;
        let sum2 = 0;
        for(let i = 0; i < 2; i++){
            if(i === 0){
                firstMustExpenses = prompt("Какие обязательные ежемесячные расходы у вас есть?", "кошка, собака, жена");
                
                sum1 += +prompt("Во сколько это обойдется?");
                while(isNaN(sum1) || sum1 == "" || sum1 == null){
                    sum1 += +prompt("Во сколько это обойдется?");
                }
                appData.expenses[firstMustExpenses] = sum1;
            }else if(i === 1){
                secondMustExpenses = prompt("Какие обязательные ежемесячные расходы у вас есть?", "магазин, интернет");

                sum2 += +prompt("Во сколько это обойдется?");
                while(isNaN(sum2) || sum2 == "" || sum2 == null){
                    sum2 += +prompt("Во сколько это обойдется?");
                }
                appData.expenses[secondMustExpenses] = sum2;
            }          
        }
        return sum1 + sum2;
        
        
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    // рассчет сбережений за месяц
    getAccumulatedMonth:  function(salary, costs){
    return salary - costs;
    },
    
    //сумма расходов за месяц
    getExpensesMonth: function(callback){
        

        // for(let key in appData.expenses){
        //     return console.log("Ключ: " + key + "значение:" + appData.expenses);
        // }
},
    
    // вывод сколько месяцев нужно откладывать
    getTargetMonth: function(target, save){
    let charge = Math.ceil(target / save);
    if(charge < 0){
        return "Цель не будет достигнута.";
    }
    return "Цель будет достигнута через " + charge + " месяцев.";
    },
    //вывод об уровне дохода
    getStatusIncome: function(incomeLvl){
    if(incomeLvl >= 800){
        return ('Высокий уровень дохода');
    }else if(incomeLvl >= 300){
        return ('Средний уровень дохода');
    }else if(incomeLvl >= 0){
        return ('Низкий уровень дохода');
    }else if(incomeLvl < 0){
        return ('Что-то пошло не так');
    }
    }
}

appData.budget = money;


// вопрос о статьях расходов
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "кошка, собака, интернет");


// //сумма расходов за месяц
// let firstMustExpenses,
//     secondMustExpenses;
// let getExpensesMonth = function(){
//     let sum = 0;
//     for(let i = 0; i < 2; i++){
//         if(i === 0){
//             firstMustExpenses = prompt("Какие обязательные ежемесячные расходы у вас есть?", "кошка, собака, жена");

//         }else if(i === 1){
//             secondMustExpenses = prompt("Какие обязательные ежемесячные расходы у вас есть?", "магазин, интернет");
//         }
        
        
//         sum += +prompt("Во сколько это обойдется?");
//         while(isNaN(sum) || sum == "" || sum == null){
//             sum += +prompt("Во сколько это обойдется?");
//         }
//     }
//     return sum;
// };
let costsPerMonth = appData.asking();



// // рассчет сбережений за месяц
// let getAccumulatedMonth = function(salary, costs){
//     return salary - costs;
// };
let accumulatedMonth = appData.getAccumulatedMonth(appData.budget,costsPerMonth);
console.log(accumulatedMonth);

// // вывод сколько месяцев нужно откладывать
// let getTargetMonth = function(target, save){
//     let charge = Math.ceil(target / save);
//     if(charge < 0){
//         return "Цель не будет достигнута.";
//     }
//     return "Цель будет достигнута через " + charge + " месяцев.";
    
// };
console.log(appData.getTargetMonth(appData.mission, accumulatedMonth));

// сбережения в день
let getBudgetDay = function(save, month){
    let savePerDay = Math.floor(save / month);
    return savePerDay;
}
let budgetDay = getBudgetDay(accumulatedMonth, 30);
console.log(budgetDay);

// //вывод об уровне дохода
// let getStatusIncome = function(incomeLvl){
//     if(incomeLvl >= 800){
//         return ('Высокий уровень дохода');
//     }else if(incomeLvl >= 300){
//         return ('Средний уровень дохода');
//     }else if(incomeLvl >= 0){
//         return ('Низкий уровень дохода');
//     }else if(incomeLvl < 0){
//         return ('Что-то пошло не так');
//     }
// };
let statusIncome = appData.getStatusIncome(budgetDay);
console.log(statusIncome);



console.log(appData);

// 6