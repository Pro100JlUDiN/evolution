'use stric';



// подсказки из видоса

// let myFun = function(a, b, plus, minus){
//     let res = (a > b) ? minus(a, b) : plus(a, b);
//     console.log(res);
// }

// myFun(
//     5,
//     5,
//     function(a, b){return a + b;},
//     function(a, b){return a - b;}
// );


// let hello  = function(name){
//     return 'Hello ' + name;
// }

// console.log(hello('DOdique'));

// // воспроизвести функцию с определением статуса пользователя

// let userStatus = function(userData){
//     if(userData === "admin"){
//         return "Администратор";
//     }else{
//         return "Пользователь";
//     }
// }

// let userName = function(name, callback){
//     let status = "user";
//     if(name === "Лёха" || name === "Юра"){
//         status = "admin";
//     }
//     return callback(status);
// }

// console.log(userName("я", userStatus));