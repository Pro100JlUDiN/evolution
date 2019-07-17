"use stric";
// кнопка "Рассчитать"
let btnTake = document.getElementById("start");
// кнопка "Сбросить"
let btnReset = document.getElementById("cancel");
//Месячный доход
let monthSalaryField = document.querySelector(".salary-amount");
// плюсы к доходам
let btnIncomeAdd = document.getElementsByTagName("button")[0];
// плюсы к расходам
let btnExpensesAdd = document.getElementsByTagName("button")[1];
// чекбокс о наличии депозита
let checkBox = document.querySelector("#deposit-check");
// поля возможных доходов
let addIncomeField = document.querySelectorAll(".additional_income-item");
// поля ввода в правой части
let budgetDayField = document.getElementsByClassName("budget_day-value")[0];
let expensesMonthField = document.getElementsByClassName("expenses_month-value")[0];
let addIncomeFieldLeft = document.getElementsByClassName("additional_income-value")[0];
let addExpensesField = document.getElementsByClassName("additional_expenses-value")[0];
let incomePeriodField = document.getElementsByClassName("income_period-value")[0];
let targetField = document.getElementsByClassName("target_month-value")[0];

let budgetMonthField = document.querySelector(".budget_month-value");
// дополнительный доход
let incomeItems = document.querySelectorAll(".income-items");
// Обязательные расходы
let mustExpensesName = document.querySelector(".expenses-title");
let expensesItems = document.querySelectorAll(".expenses-items");
// Возможные расходы
let addExpensesLeftField = document.querySelector(".additional_expenses-item");
// Цель
let targetLeftField = document.querySelector(".target-amount");
// Период расчета (ползунок)
let period = document.querySelector('[type="range"]');
let periodAmount = document.querySelector(".period-amount");
// поля ввода
let inputText = document.querySelectorAll(`[type="text"]`);


//объект из видео 6 урока
let appData = {
    income: {},
    incomeMonth: 0,
    budget: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    // вопрос о месячном доходе
    start: function(){

        if(monthSalaryField.value === ''){
            btnTake.disabled = "disabled";
            return;
        }
        appData.budget = +monthSalaryField.value;
        

        appData.getExpenses();
        
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddIncome();
        appData.getAddExpenses();
        appData.getTargetMonth();
        appData.calcSavedMoney();
        appData.getBudget();
        appData.getBlocking();
        
        appData.showResult();
        
    },
    showResult: function (){
        budgetMonthField.value = appData.budgetMonth;
        budgetDayField.value = appData.budgetDay;
        expensesMonthField.value = appData.expensesMonth;
        addExpensesField.value = appData.addExpenses.join(", ");
        addIncomeFieldLeft.value = appData.addIncome.join(", ");
        targetField.value = appData.getTargetMonth();
        incomePeriodField.value = appData.calcSavedMoney();
        period.addEventListener("change", appData.getValueRange);
    },
    addExpensesBlock: function(){
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem , btnExpensesAdd);
        
        expensesItems = document.querySelectorAll(".expenses-items");
        if(expensesItems.length === 3){
            btnExpensesAdd.style.display = "none";
        }
    },
    // обязательные расходы
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector(".expenses-title").value;
            let cashExpenses = +item.querySelector(".expenses-amount").value;
            if(itemExpenses !== "" && cashExpenses !== ""){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    // плюс подолнительных доходов
    addIncomeBlock: function(){

        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncomeAdd);

        incomeItems = document.querySelectorAll(".income-items");
        if(incomeItems.length === 3){
            btnIncomeAdd.style.display = "none";
        }
    },
    // поля дополнительных доходов
    getIncome: function(){
        incomeItems.forEach(function(item){
            let incomeFieldName = item.querySelector(".income-title").value;
            let incomeFieldSum = +item.querySelector(".income-amount").value;
            if(incomeFieldName !== "" && incomeFieldSum !== ""){
                    appData.budget += incomeFieldSum;
            }
            
        });

    },
    // возможные расходы (большое поле внизу)
    getAddExpenses: function(){
        let addExpenses = addExpensesLeftField.value.split(",");
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ""){
                appData.addExpenses.push(item);
            }
        });
    },
    // поля возможных доходов
    getAddIncome: function(){
        addIncomeField.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ""){
                appData.addIncome.push(itemValue);
            }
        });
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    // рассчет сбережений за месяц
    getBudget:  function(){
       appData.budgetMonth =  appData.budget + appData.incomeMonth - appData.expensesMonth;

       appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    
    //сумма расходов за месяц
    getExpensesMonth: function(){
        let amountOf = 0;
        for(let key in appData.expenses){
            amountOf += appData.expenses[key];
        }

        return appData.expensesMonth = +amountOf;
    },
    
    // вывод сколько месяцев нужно откладывать
    getTargetMonth: function(){
    let charge = Math.ceil(targetLeftField.value / appData.budgetMonth);
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
        return appData.budgetMonth * period.value;
    },
    // ползунок
    getValueRange: function(){
        periodAmount.innerHTML = period.value;
        appData.showResult();
    },
    // блокировка полей ввода и скрытие кнопки "Рассчитать"
    getBlocking: function(){
        for(let i = 0; i < inputText.length; i++){
        inputText[i].disabled = "disabled";
        }
        btnTake.style.display = "none";
        btnReset.style.display = "block";
    }

}

btnTake.addEventListener("click", appData.start);

btnExpensesAdd.addEventListener("click", appData.addExpensesBlock);
btnIncomeAdd.addEventListener("click", appData.addIncomeBlock);



console.log(appData);


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