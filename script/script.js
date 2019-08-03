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



let AppData = function () {
    this.income = {};
    this.incomeMonth = 0;
    this.budget = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
};
let appData = new AppData();

AppData.prototype.start = function () {

    if (monthSalaryField.value === '') {
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
    this.getAdd(1);
    this.getAdd(0);

    this.getBudget();
    this.getTargetMonth();
    this.calcSavedMoney();
    this.getInfoDeposit();
    this.getBlocking();


    this.showResult();

};
// вывод данных в правый блок
AppData.prototype.showResult = function () {
    budgetMonthField.value = this.budgetMonth;
    budgetDayField.value = this.budgetDay;
    expensesMonthField.value = this.expensesMonth;
    addExpensesField.value = this.addExpenses.join(", ");
    addIncomeFieldLeft.value = this.addIncome.join(", ");
    targetField.value = this.getTargetMonth();
    incomePeriodField.value = this.calcSavedMoney();
};
// кнопка сброса
AppData.prototype.clear = function () {
    inputText.forEach((elem) => {
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
// // плюс пополнительных доходов
// AppData.prototype.addExpensesBlock = function () {

//     let cloneExpensesItem = expensesItems[0].cloneNode(true);
//     expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpensesAdd);

//     expensesItems = document.querySelectorAll(".expenses-items");
//     if (expensesItems.length === 3) {
//         btnExpensesAdd.style.display = "none";
//     }
// };
// // плюс подолнительных доходов
// AppData.prototype.addIncomeBlock = function () {

//     let cloneIncomeItem = incomeItems[0].cloneNode(true);
//     incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncomeAdd);

//     incomeItems = document.querySelectorAll(".income-items");
//     if (incomeItems.length === 3) {
//         btnIncomeAdd.style.display = "none";
//     }
// };
// обязательные расходы
AppData.prototype.getExpenses = function () {
    expensesItems.forEach((item) => {
        let itemExpenses = item.querySelector(".expenses-title").value;
        let cashExpenses = +item.querySelector(".expenses-amount").value;
        if (itemExpenses !== "" && cashExpenses !== "") {
            this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
// поля дополнительных доходов
AppData.prototype.getIncome = function () {
    incomeItems.forEach((item) => {
        let incomeFieldName = item.querySelector(".income-title").value;
        let incomeFieldSum = +item.querySelector(".income-amount").value;
        if (incomeFieldName !== "" && incomeFieldSum !== "") {
            this.budget += incomeFieldSum;
        }
    });

};
// (1, addExpensesLeftField, this.addExpenses);
// (0, addIncomeField, this.addIncome);
AppData.prototype.getAdd = function(bools/*,fieldsName, where*/){
    
    if(bools === true){
        let addExpenses = addExpensesLeftField.value.split(",");
        addExpenses.forEach((item)=>{
            item = item.trim();
            if(item !== ""){
                this.addExpenses.push(item);     // заменил this na appData
            }
        });
    }else{
        addIncomeField.forEach((item)=>{
            let itemValue = item.value.trim();
            if(itemValue !== ""){
                appData.addIncome.push(itemValue);  // заменил this na appData
            }
        });
    }
};
// // возможные расходы (большое поле внизу)
// AppData.prototype.getAddExpenses = function () {
//     let addExpenses = addExpensesLeftField.value.split(",");
//     addExpenses.forEach((item) => {
//         item = item.trim();
//         if (item !== "") {
//             this.addExpenses.push(item);
//         }
//     });
// };
// // поля возможных доходов
// AppData.prototype.getAddIncome = function () {
//     addIncomeField.forEach((item) => {
//         let itemValue = item.value.trim();
//         if (itemValue !== "") {
//             this.addIncome.push(itemValue);
//         }
//     });
// };

// рассчет сбережений за месяц
AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;

    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
//сумма расходов за месяц
AppData.prototype.getExpensesMonth = function () {
    let amountOf = 0;
    for (let key in this.expenses) {
        amountOf += this.expenses[key];
    }

    return this.expensesMonth = +amountOf;
};
// вывод сколько месяцев нужно откладывать
AppData.prototype.getTargetMonth = function () {
    let charge = Math.ceil(targetLeftField.value / this.budgetMonth);
    if (charge < 0) {
        return "Цель не будет достигнута.";
    };

    return `Цель будет достигнута через ${charge} месяцев.`;
};

AppData.prototype.getInfoDeposit = function () {
    if (this.deposit) {
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};
// ползунок
AppData.prototype.getValueRange = function () {
    periodAmount.innerHTML = period.value;
    this.showResult();
};
AppData.prototype.calcSavedMoney = function () {

    return this.budgetMonth * +(period.value);
};
// блокировка полей ввода и скрытие кнопки "Рассчитать"
AppData.prototype.getBlocking = function () {
    inputText.forEach((item) => {
        item.setAttribute("disabled", "");
    });
    btnTake.style.display = "none";
    btnReset.style.display = "block";
};

AppData.prototype.getListeningForEvent = function () {

    btnTake.addEventListener("click", this.start.bind(appData));

    btnReset.addEventListener("click", this.clear.bind(appData));

    // btnExpensesAdd.addEventListener("click", appData.addExpensesBlock.bind(appData));
    // btnIncomeAdd.addEventListener("click", appData.addIncomeBlock.bind(appData));
    btnExpensesAdd.addEventListener("click", () =>{
        this.addBlock(expensesItems, btnExpensesAdd, ".expenses-items");
    });
    
    btnIncomeAdd.addEventListener("click", ()=>{

        this.addBlock(incomeItems, btnIncomeAdd, ".income-items");
    });

    period.addEventListener("change", this.getValueRange.bind(appData));
    // галочка депозита, появление 2х полей ввода
    checkBox.addEventListener("change", function () {
        if (checkBox.checked === true) {
            depositBank.style.display = "inline-block";
            depositAmount.style.display = "inline-block";
            appData.deposit = true;
            depositBank.addEventListener("change", function () {
                let selectIndex = this.options[this.selectedIndex].value;
                if (selectIndex === "other") {
                    depositPercent.disabled = false;
                    depositPercent.value = "";
                    depositPercent.style.display = "inline-block";
                } else {
                    depositPercent.value = selectIndex;
                    depositPercent.style.display = "none";
                }
            });
        } else {
            depositBank.style.display = "none";
            depositAmount.style.display = "none";
            depositAmount.value = "";
            depositPercent.value = "";
            this.deposit = false;
        }
    });
};

AppData.prototype.getListeningForEvent();
