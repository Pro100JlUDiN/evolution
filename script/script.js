'use strict';
// кнопка "Рассчитать"
let btnTake = document.getElementById("start"),
// кнопка "Сбросить"
 btnReset = document.getElementById("cancel"),
//Месячный доход
 monthSalaryField = document.querySelector(".salary-amount"),
// плюсы к доходам
 btnIncomeAdd = document.getElementsByTagName("button")[0],
// плюсы к расходам
 btnExpensesAdd = document.getElementsByTagName("button")[1],
// чекбокс о наличии депозита
 checkBox = document.querySelector("#deposit-check"),
// поле для суммы депозита
 depositAmount = document.querySelector(".deposit-amount"),
// поле под какой процент был депозит
 depositPercent = document.querySelector(".deposit-percent"),
// список банков
 depositBank = document.querySelector(".deposit-bank"),
// поля возможных доходов
 addIncomeField = document.querySelectorAll(".additional_income-item"),
// поля ввода в правой части
 budgetDayField = document.getElementsByClassName("budget_day-value")[0],
 expensesMonthField = document.getElementsByClassName("expenses_month-value")[0],
 addIncomeFieldLeft = document.getElementsByClassName("additional_income-value")[0],
 addExpensesField = document.getElementsByClassName("additional_expenses-value")[0],
 incomePeriodField = document.getElementsByClassName("income_period-value")[0],
 targetField = document.getElementsByClassName("target_month-value")[0],

 budgetMonthField = document.querySelector(".budget_month-value"),
// дополнительный доход
 incomeItems = document.querySelectorAll(".income-items"),
// Обязательные расходы
 mustExpensesName = document.querySelector(".expenses-title"),
 expensesItems = document.querySelectorAll(".expenses-items"),
// Возможные расходы
addExpensesLeftField = document.querySelector(".additional_expenses-item"),
// Цель
 targetLeftField = document.querySelector(".target-amount"),
// Период расчета (ползунок)
 period = document.querySelector('[type="range"]'),
 periodAmount = document.querySelector(".period-amount"),
// поля ввода
 inputText = document.querySelectorAll('[type="text"]'),


//объект из видео 6 урока
appData = {
    income: {},
    incomeMonth: 0,
    budget: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start(){

        if(monthSalaryField.value === ''){
            btnTake.disabled = "disabled";
            btnExpensesAdd.disabled = "disabled";
            btnIncomeAdd.disabled = "disabled";
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
        this.getInfoDeposit();
        this.getBudget();
        this.getBlocking();
        
        
        this.showResult();
        
    },
    showResult(){
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
    clear(){
        inputText.forEach((elem)=>{
            elem.disabled = false;
            elem.value = "";
        });
        btnReset.style.display = "none";
        
        btnTake.style.display = "block";
        btnTake.disbled = false;
        
    },
    // плюс пополнительных доходов
    addExpensesBlock(){
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem , btnExpensesAdd);
        
        expensesItems = document.querySelectorAll(".expenses-items");
        if(expensesItems.length === 3){
            btnExpensesAdd.style.display = "none";
        }
    },
    // обязательные расходы
    getExpenses(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector(".expenses-title").value;
            let cashExpenses = +item.querySelector(".expenses-amount").value;
            if(itemExpenses !== "" && cashExpenses !== ""){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    // плюс подолнительных доходов
    addIncomeBlock(){

        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncomeAdd);

        incomeItems = document.querySelectorAll(".income-items");
        if(incomeItems.length === 3){
            btnIncomeAdd.style.display = "none";
        }
    },
    // поля дополнительных доходов
    getIncome(){
        incomeItems.forEach((item)=>{
            let incomeFieldName = item.querySelector(".income-title").value;
            let incomeFieldSum = +item.querySelector(".income-amount").value;
            if(incomeFieldName !== "" && incomeFieldSum !== ""){
                    this.budget += incomeFieldSum;
            }
            
        });

    },
    // возможные расходы (большое поле внизу)
    getAddExpenses(){
        let addExpenses = addExpensesLeftField.value.split(",");
        addExpenses.forEach((item)=>{
            item = item.trim();
            if(item !== ""){
                this.addExpenses.push(item);
            }
        });
    },
    // поля возможных доходов
    getAddIncome(){
        addIncomeField.forEach((item)=>{
            let itemValue = item.value.trim();
            if(itemValue !== ""){
                this.addIncome.push(itemValue);
            }
        });
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    // рассчет сбережений за месяц
    getBudget(){
       this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;

       this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    //сумма расходов за месяц
    getExpensesMonth(){
        let amountOf = 0;
        for(let key in this.expenses){
            amountOf += this.expenses[key];
        }

        return this.expensesMonth = +amountOf;
    },
    // вывод сколько месяцев нужно откладывать
    getTargetMonth(){
    let charge = Math.ceil(targetLeftField.value / this.budgetMonth);
    if(charge < 0){
        return "Цель не будет достигнута.";
    }
    return "Цель будет достигнута через " + charge + " месяцев.";
    },
    //вывод об уровне дохода
    getStatusIncome(incomeLvl){
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
    getInfoDeposit(){
        if(this.deposit){
            this.percentDeposit = depositPercent.value;
			this.moneyDeposit = depositAmount.value;			
        }
    },
    calcSavedMoney(){
        return this.budgetMonth * period.value;
    },
    // ползунок
    getValueRange(){
        periodAmount.innerHTML = period.value;
        this.showResult();
    },
    // блокировка полей ввода и скрытие кнопки "Рассчитать"
    getBlocking(){
        inputText.forEach((item)=>{
            item.setAttribute("disabled","");
        });
            btnTake.style.display = "none";
            btnReset.style.display = "block";
    }    
};


btnTake.addEventListener("click", appData.start.bind(appData));

btnReset.addEventListener("click", appData.clear.bind(appData));

btnExpensesAdd.addEventListener("click", appData.addExpensesBlock.bind(appData));
btnIncomeAdd.addEventListener("click", appData.addIncomeBlock.bind(appData));
let rangeValue = period.addEventListener("change", appData.getValueRange.bind(appData));

checkBox.addEventListener("change",function(){
    if(checkBox.checked === true){
        depositBank.style.display = "inline-block";
        depositAmount.style.display = "inline-block";
        appData.deposit = true;
        depositBank.addEventListener("change", function(){
            let selectIndex = this.options[this.selectedIndex].value;
            if(selectIndex === "other"){
                depositPercent.disabled = false;
                depositPercent.value = "";
                depositPercent.style.display = "inline-block";
            }else{
                depositPercent.value = selectIndex;
                depositPercent.style.display = "none";
            }
        });
    }else{
        depositBank.style.display = "none";
        depositAmount.style.display = "none";
        depositAmount.value = "";
        depositPercent.value = "";
        appData.deposit = false;
    }
});

console.log(appData);


// for(let key in appData){
//     console.log("Наша программа включает в себя данные: " + key);
// }



