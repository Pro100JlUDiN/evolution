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
 inputText = document.querySelectorAll('[type="text"]');



let AppData = function(){
    this.income = {};
    this.incomeMonth = 0;
    this.budget = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposi = 0;
    this.moneyDeposit = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
};
let appData = new AppData();


AppData.prototype.start = function(){

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
    // this.getAddIncome();
    // this.getAddExpenses();
    this.getAdd(true,this.addExpenses,addExpensesLeftField);
    this.getAdd(false,this.addIncome,addIncomeField);
    this.getTargetMonth();
    this.calcSavedMoney();
    this.getInfoDeposit();
    this.getBudget();
    this.getBlocking();

    
    this.showResult();
    
};
// вывод данных в правый блок
AppData.prototype.showResult = function(){
    budgetMonthField.value = this.budgetMonth;
    budgetDayField.value = this.budgetDay;
    expensesMonthField.value = this.expensesMonth;
    addExpensesField.value = this.addExpenses.join(", ");
    addIncomeFieldLeft.value = this.addIncome.join(", ");
    targetField.value = this.getTargetMonth();
    incomePeriodField.value = this.calcSavedMoney(); //интересущее поле
    
};
// кнопка сброса
AppData.prototype.clear = function(){
    inputText.forEach((elem)=>{
        elem.disabled = false;
        elem.value = "";
    });
    btnReset.style.display = "none";
    
    btnTake.style.display = "block";
    btnTake.disbled = false;
    
};
// метод для плюсов
AppData.prototype.addBlock = function(item, press, fieldsName){
    
    let cloneField = item[0].cloneNode(true);
    item[0].parentNode.insertBefore(cloneField , press);
    
    item = document.querySelectorAll(fieldsName);
    if(item.length === 3){
        press.style.display = "none";
    }
};


// поля обязательныех расходов
AppData.prototype.getExpenses = function(){
        expensesItems.forEach((item)=>{
                let itemExpenses = item.querySelector(".expenses-title").value;
                let cashExpenses = +item.querySelector(".expenses-amount").value;
        if(itemExpenses !== "" && cashExpenses !== ""){
            this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
// поля дополнительных доходов
AppData.prototype.getIncome = function(){
    incomeItems.forEach((item)=>{
        let incomeFieldName = item.querySelector(".income-title").value;
        let incomeFieldSum = +item.querySelector(".income-amount").value;
        if(incomeFieldName !== "" && incomeFieldSum !== ""){
                this.budget += incomeFieldSum;
        }        
    });       

};

AppData.prototype.getAdd = function( bools, where, fieldsName){
    
    if(bools === true){
        let addExpenses = fieldsName.value.split(",");
        addExpenses.forEach((item)=>{
            item = item.trim();
            if(item !== ""){
                where.push(item);
            }
        });
    }else{
        fieldsName.forEach((item)=>{
            let itemValue = item.value.trim();
            if(itemValue !== ""){
                where.push(itemValue);
            }
        });
    }
    };

// рассчет сбережений за месяц
AppData.prototype.getBudget = function(){
    if(this.deposit === true){
        this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
    }else{
        this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth;
    }

    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
//сумма расходов за месяц
AppData.prototype.getExpensesMonth = function(){
    let amountOf = 0;
    for(let key in this.expenses){
        amountOf += this.expenses[key];
    }

    return this.expensesMonth = +amountOf;
};
// вывод сколько месяцев нужно откладывать
AppData.prototype.getTargetMonth = function(){
let charge = Math.ceil(targetLeftField.value / this.budgetMonth);
    if(charge < 0){
        return "Цель не будет достигнута.";
    };

    return `Цель будет достигнута через ${charge}  месяцев.`;
};

AppData.prototype.getInfoDeposit = function(){
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;						
};

// ползунок
AppData.prototype.getValueRange = function(){
    periodAmount.textContent = period.value;
    this.showResult();
};
// умножение поля доходов за месяц на значение под ползунком
AppData.prototype.calcSavedMoney = function(){
    return this.budgetMonth * +periodAmount.innerHTML;
};
// блокировка полей ввода и скрытие кнопки "Рассчитать"
AppData.prototype.getBlocking = function(){
    inputText.forEach((item)=>{
        item.setAttribute("disabled","");
    });
    btnTake.style.display = "none";
    btnReset.style.display = "block";
};    
// обработчики событий
AppData.prototype.getListeningForEvent = function(){
    btnTake.addEventListener("click", this.start.bind(this));
    btnReset.addEventListener("click", this.clear.bind(this));
    
    btnExpensesAdd.addEventListener("click", () =>{
        
        this.addBlock(expensesItems, btnExpensesAdd, ".expenses-items");
    });
    
    btnIncomeAdd.addEventListener("click", ()=>{

        this.addBlock(incomeItems, btnIncomeAdd, ".income-items");
    });
    
    period.addEventListener("change", this.getValueRange.bind(this));
    // галочка депозита, появление 2х полей ввода
    checkBox.addEventListener("change",function(){
        if(checkBox.checked === true){
            depositBank.style.display = "inline-block";
            depositAmount.style.display = "inline-block";
            this.deposit = true;
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
            this.deposit = false;
        }
    });
};
AppData.prototype.getListeningForEvent();



