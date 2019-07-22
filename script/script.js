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
let period = document.querySelector(`[type="range"]`);
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
    start: function(){

        if(monthSalaryField.value === ''){
            btnTake.disabled = "disabled";
            return;
        }
        this.budget = +monthSalaryField.value;
        

        this.getExpenses();
        
        this.getIncome();
        this.getExpensesMonth();
        this.getAddIncome();
        this.getAddExpenses();
        this.getTargetMonth();
        this.calcSavedMoney();
        this.getBudget();
        this.getBlocking();
        
        
        this.showResult();
        
    },
    showResult: function (){
        budgetMonthField.value = this.budgetMonth;
        budgetDayField.value = this.budgetDay;
        expensesMonthField.value = this.expensesMonth;
        addExpensesField.value = this.addExpenses.join(", ");
        addIncomeFieldLeft.value = this.addIncome.join(", ");
        targetField.value = this.getTargetMonth();
        incomePeriodField.value = this.calcSavedMoney();
        rangeValue;
    },
    // кнопка сброса
    clear: function(){
        inputText.forEach(function(elem){
            elem.disabled = false;
            elem.value = "";
        });
        btnReset.style.display = "none";
        
        btnTake.style.display = "block";
        btnTake.disbled = false;
        
    },
    // плюс пополнительных доходов
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
       this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth;

       this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    //сумма расходов за месяц
    getExpensesMonth: function(){
        let amountOf = 0;
        for(let key in this.expenses){
            amountOf += this.expenses[key];
        }

        return this.expensesMonth = +amountOf;
    },
    // вывод сколько месяцев нужно откладывать
    getTargetMonth: function(){
    let charge = Math.ceil(targetLeftField.value / this.budgetMonth);
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
        if(this.deposit){
            this.percentDeposit = +prompt("Какой годовой процент?", "10");
			while(isNaN(this.percentDeposit) || this.percentDeposit == "" || this.percentDeposit == null){
				this.percentDeposit = +prompt("Какой годовой процент?", "10");
			}
			
            this.moneyDeposit = prompt("Какая сумма заложена?", 10000);
			while(isNaN(this.moneyDeposit) || this.moneyDeposit == "" || this.moneyDeposit == null){
				this.moneyDeposit = prompt("Какая сумма заложена?", 10000);
			}
        }
    },
    calcSavedMoney: function(){
        return this.budgetMonth * period.value;
    },
    // ползунок
    getValueRange: function(){
        periodAmount.innerHTML = period.value;
        this.showResult();
    },
    // блокировка полей ввода и скрытие кнопки "Рассчитать"
    getBlocking: function(){
        for(let i = 0; i < inputText.length; i++){
        inputText[i].setAttribute("disabled","");
        }
        btnTake.style.display = "none";

        btnReset.style.display = "block";
        btnReset.setAttribute("type","reset");

    }
}


btnTake.addEventListener("click", appData.start.bind(appData));

btnReset.addEventListener("click", appData.clear.bind(appData));

btnExpensesAdd.addEventListener("click", appData.addExpensesBlock.bind(appData));
btnIncomeAdd.addEventListener("click", appData.addIncomeBlock.bind(appData));
let rangeValue = period.addEventListener("change", appData.getValueRange.bind(appData));



console.log(appData);


// for(let key in appData){
//     console.log("Наша программа включает в себя данные: " + key);
// }



