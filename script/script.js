"use stric";
// кнопка "Рассчитать"
let btnTake = document.getElementById("start");
//Месячный доход
let monthSalaryField = document.querySelector(".salary-amount");
// плюсы к доходам
let btnIncomeAdd = document.getElementsByTagName("button")[0];
let btnExpensesAdd = document.getElementsByTagName("button")[1];
// чекбокс о наличии депозита
let checkBox = document.querySelector("#deposit-check");
// поля возможных доходов
let addIncomeField = document.querySelectorAll(".additional_income-item");
// поля ввода в правой части
let budgetDayField = document.getElementsByClassName("budget_day-value");
let expensesMonthField = document.getElementsByClassName("expenses_month-value");
let addIncomeFieldLeft = document.getElementsByClassName("additional_income-value");
let addExpensesField = document.getElementsByClassName("additional_expenses-value");
let incomePeriodField = document.getElementsByClassName("income_period-value");
let targetField = document.getElementsByClassName("target_month-value");

let budgetMonthField = document.querySelector(".budget_month-value");
// Обязательные расходы
let mustExpensesName = document.querySelector(".expenses-title");
let mustExpensesAmount = document.querySelector(".expenses-amount");
// Возможные расходы
let addExpensesLeftField = document.querySelector(".additional_expenses-item");
// Цель
let targetLeftField = document.querySelector(".target-amount");
// Период расчета (ползунок)
let period = document.querySelector('[type="range"]');




//объект из видео 6 урока
let appData = {
    income: {},
    budget: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 5000000,
    period: 3,
    // вопрос о месячном доходе
    start: function(){

        if(monthSalaryField.value === ''){
            alaert('Ошибка поля "Месячный доход" должно быть заполнено!');
            return;
        }
        appData.budget = monthSalaryField.value;
        console.log("salaryAmount.value: ", monthSalaryField.value)
        // appData.asking();
        // appData.getExpensesMonth();
        // appData.getBudget();
        
    },
    addExpensesBlock: function(){
        let expensesItem = document.querySelector(".expenses-items");
        console.log(expensesItem.parentNode);
        let cloneExpensesItem = expensesItem.cloneNode(true);
        expensesItem.parentNode.insertbefore(cloneExpensesItem , btnExpensesAdd);
    },
    asking: function(){

        if(confirm("Есть ли у вас дополнительный заработок?")){
            let itemIncome = 0;
            while(!isNaN(itemIncome) || itemIncome == null){
				itemIncome = prompt("Какой у вас дополнительный заработок?", "точу черенки для лопат");
			}
            

            let cashIncome;
            cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 20000);
			while(isNaN(cashIncome) || cashIncome == "" || cashIncome == null){
				cashIncome = +prompt("Сколько в месяц вы на этом зарабатываете?");
			}
            appData.income[itemIncome] = cashIncome;
        }


            appData.addExpenses = prompt("Перечислите ваши обязательные расходы", "Корм для меня,Ипотека,Корм для Кошки");
            appData.addExpenses = appData.addExpenses.toLowerCase().split(',');
            
            if(appData.deposit = confirm("Есть ли у вас депозит в банке?")){
                appData.getInfoDeposit();
            }

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
      
            appData.getExpensesMonth();
        }
        let sumAll = sum1 + sum2;

        appData.getBudget();
        
        return sumAll;
        
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    // рассчет сбережений за месяц
    getBudget:  function(){
       let savePerMonth =  appData.budget - appData.expensesMonth;
       appData.budgetMonth = savePerMonth;

       let savePerDay = Math.floor(savePerMonth / 30);
       appData.budgetDay = savePerDay;

    },
    
    //сумма расходов за месяц
    getExpensesMonth: function(){
        let amountOf = 0;
        for(let key in appData.expenses){
            amountOf += appData.expenses[key];
        }

        return appData.expensesMonth = amountOf;
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
    },

    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = +prompt("Какой годовой процент?", "10");
			while(isNaN(appData.percentDeposit) || appData.percentDeposit == "" || appData.percentDeposit == null){
				appData.percentDeposit = +prompt("Какой годовой процент?", "10");
			}
			
            appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
			while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == "" || appData.moneyDeposit == null){
				appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
			}
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
}

btnTake.addEventListener("click", appData.start);

btnExpensesAdd.addEventListener("click", appData.addExpensesBlock);


let costsPerMonth = appData.asking();

console.log(appData);

console.log("расходы за месяц " + appData.expensesMonth);
console.log(appData.getTargetMonth(appData.mission, appData.expensesMonth));
console.log(appData.getStatusIncome(appData.budgetDay));

// for(let key in appData){
//     console.log("Наша программа включает в себя данные: " + key);
// }

// 6

let firstLetter = "";
let ofherLetters = "";
let suitWord = "";
let suitStr = "";
for(let item of appData.addExpenses){
    firstLetter = item[0].toUpperCase();
    ofherLetters = item.substring(1);
    suitWord = firstLetter + ofherLetters;
    suitStr += firstLetter + ofherLetters + ", ";
    
}
let rexxar = suitStr.length - 2; 
suitStr = suitStr.substr(0, rexxar);
console.log(suitStr);