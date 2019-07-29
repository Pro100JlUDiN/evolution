// 'use strict';

// // rest-параметр для заключения всех аргументов в отдельный массив(всегда пишется последним)
// function test(...arr){
//     console.log(arr);   //где arr - название массива с переданными аргументами, если не будет передано ни 1 аргумента, то будет пустой массив.
// };

// test('red', 5, 12, 'black', [], true, 9);

// // rest-параметр для выделения некоторых аргументов в отдельные переменные(локальные ofc)
// function test(a, undefined, b, c){ // undefined здесь для пропуска аргумента (5)
//     console.log(a); // a = "red"
//     console.log(b); // b = 12
//     console.log(c); // c = "black"
// };

// test('red', 5, 12, 'black', [1,2,3], true, 9);

// //передача агрументов из массива
// let arr = ['green', 8, false];

// function test(a,b,c){  // значения инексов arr 1-3 передаются в переменные a,b,c по очереди
//     console.log(a); //a = 'green'
//     console.log(b); //b = 8
//     console.log(c); //c = false
// }

// test(...arr);

// // указание аргументов функции в виде индексов нескольких массивов
// let arr = ['green', 8, false];
// let arr2 = [true, 228, 'purple'];

// function test(...arr3){ 
//     console.log(arr3); // arr3 = ['green', 8, false, true, 228, 'purple']
// }

// test(...arr, ...arr2); // нужные массивы пишутся через запятую, таким же способом можно объединять несколько массивов в 1

// // получение DOM элементов в массив

// const allImg = document.querySelectorAll('img');
// const arrOfImg = [...allImg]; // массив из блоков img

// //деструктуризация объектов. Преобразование ключ(свойство):значение в переменная = значение
// const car = {
//     brand: 'mazda',
//     model: 3,
//     color: 'red'
// }

// const {brand, model, color} = car;
// console.log(brand); // mazda

// деструктуризация в случае с вложенными объектами
// const car = {
//         brand: 'mazda',
//         model: 3,
//         option: {
//             color: 'red',
//             abs: true
//         }
// };

// const {brand, model, option:{color,abs}} = car; //при деструктуризации вложенных объектов синтаксис остается таким же как и в объекте

// const {
//     brand,
//     model,
//     option:{
//         color,
//         abs
//     }
// } = car; //то же самое, наглядно

// // const {option:{color: carColor, abs: carAbs}} = car; //изменение названия переменной черз двоеточие

// console.log(carAbs); //true


// const {brand, releaseYear = 2006} = car; //при деструктуризации так же можно ставить значения по умолчанию (например если таких ключей(свойств) у объекта нет)
// console.log(releaseYear); //2006

// const {brand, parameters: {releaseYear = 2006} = {}} = car; // если нужно сздать объект по умолчанию присваивая пустой массив
// console.log(releaseYear); //2006


// //деструктуризировать можно прямо в параметрах функции и анонимный объект (в аргументе при вызове) и ставить значения по умолчанию
// const createCar = ({brand = "BMW", model,color,colorInt}) =>{
//     console.log(`
//     Запущено производство автомобиля ${brand} ${model}
//     цвет кузова ${color}
//     цвет салона ${colorInt}
//     `)
// }

// createCar({
//     model: 3,
//     color: 'blue',
//     colorInt: 'black'
// })

// // -//- пустой аргумент при вызове, а в параметры заключены в пустой объект
// const createCar = ({brand = "BMW", model = 6,color = "purple",colorInt = "whie"} = {}) =>{
//     console.log(`
//     Запущено производство автомобиля ${brand} ${model}
//     цвет кузова ${color}
//     цвет салона ${colorInt}
//     `)
// }

// createCar()

// // так можно добавлять ключи:значения одного объекта в другой и просто копировать объекты
// const car = {
//     brand: 'mazda',
//     model: 3,
//     option: {
//         color: 'red',
//         abs: true
//     }
// };

// const {brand, ...option} = car; // создастся объект optrion с ключами:значениями объекта car начиная с model и до конца
// console.log(option);

// //деструктуризация массивов
// const cars = ['mazda', 'bmw', "audi", "mercedes-benz", "ЗиЛ"];

// const [a, , b, c] = cars;  // 1 индекс был пропущен,просто пустое место через запятую
// console.log(a); // "mazda"
// console.log(b); // "bmw"
// console.log(c); // "mercedes-benz"

// // многомерный массив
// const cars = [['mazda', 'bmw'], ["audi", "mercedes-benz"], "ЗиЛ"];

// const [a, b, c] = cars;
// console.log(a);  // ['mazda', 'bmw']
// console.log(b);  // ["audi", "mercedes-benz"]
// console.log(c);  // "ЗиЛ"

// // повторив структуру исходного массива можно получить каждый элемент по отдельности и так же работают значения по умолчанию и rest-параметр
// const cars = [['mazda', 'bmw'], ["audi", "mercedes-benz", "opel"]];

// const [[a,b],[...c],d = "ЗиЛ"] = cars;
// console.log(a);  // 'mazda'
// console.log(b);  // 'bmw'
// console.log(c);  // ["audi", "mercedes-benz"]
// console.log(d);  // "ЗиЛ"

// // деструктуризация объектов и массивов
// const carsModel ={
//     brand: "Volvo",
//     models: {
//         sedan: ['s60','s90'],
//         cross: ['v60','v90']
//     }
// }

// const {brand, models:{sedan:[s1,s2], cross:[c1,c2]}} = carsModel; // нужно повторить структуру деструктуризируемого объекта

// const {
//     brand,
//     models:{        
//         sedan:[s1,s2],
//         cross:[c1,c2]
//     }
// } = carsModel; // тот же код наглядно

// console.log(c1) // 's60'

// // добавление переменных в объект
// const car = 'Buick';
// const bicycle = 'BMX';
// const motorcycle = 'YAMAHA';

// const transport = {
//     car,
//     bicycle,
//     motorcycle,
//     ride(){             // короткая запись функции объекта (не является стрелчной)
//         console.log("g0!1");
//     }
// }
// transport.ride()
// console.log(transport)

// //применение rest-параметра для обновления значений элементов объектов
// const transport = {
//     bike:"honda",
//     car: "bentley",
//     bicycle: "MTB"
// }

// const newTransport = {
//     bike: "suzuki",
//     quadBike: "polaris"
// }

// const newTransport2 = {
//     bike: "ducati"
// }

// const ship = "PoBeda";

// const curTrans = {
//         ...transport,
//         ...newTransport,
//         ...newTransport2,
//         ship,
//         ride(){
//             console.log("GO, man!");
//         }
//     };  // добавит недостающие ключи и изменит существующие слева направо, а так же можно добавлять ключи и знаения из переменных, можно добавлять ключи по ходу

// curTrans.ride();
// console.log(curTrans); // значение bike:"ducati"
