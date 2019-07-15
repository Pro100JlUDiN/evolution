'use stric';
// кнопка "Рассчитать"
let btnTake = document.getElementById("start");
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
let addIncomeField = document.getElementsByClassName("additional_income-value");
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
console.log(period);