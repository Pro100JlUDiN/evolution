"use stric";

// группа блоков с книгами
let books = document.querySelectorAll(".books");
let book = document.querySelectorAll(".book");

// свап 1 и 2 книги
books[0].insertBefore(book[1], book[0]);
// свап 3 и 6 книги
books[0].insertBefore(book[4], book[2]);
// свап 4 и 6 книги
books[0].insertBefore(book[3],book[2]);
// свап 5 и 6 книги
books[0].insertBefore(book[5],book[2]);

console.log(books[0]);

/*
1 книга = book[1]
2 книга = book[0]
3 книга = book[4]
4 книга = book[3]
5 книга = book[5]
6 книга = book[2]
*/ 

let body = document.querySelector("body");
body.style = "background: url('./image/you-dont-know-js.jpg')";


let links = document.querySelectorAll("a");
links[2].textContent = "Книга 3. this и Прототипы Объектов";

let ad = document.querySelectorAll(".adv");
body.removeChild(ad[0]);

let list = document.querySelectorAll("ul");

let elemList = document.querySelectorAll("li");
console.log(elemList);

// классы для элементов списка 2 книги
for(let i = 0; i < elemList.length; i++){
    if(i > 5 && i < 17){
        elemList[i].className = "elem_chapter_two";
    }
}
let elemChapterTow = document.querySelectorAll(".elem_chapter_two");
// свап 1 главы перед приложением C
list[1].insertBefore(elemChapterTow[3], elemChapterTow[2]);
// свап 2 главы перед приложением C
list[1].insertBefore(elemChapterTow[6], elemChapterTow[2]);
// свап 3 главы перед приложением C
list[1].insertBefore(elemChapterTow[8], elemChapterTow[2]);
// свап 4 главы перед приложением C
list[1].insertBefore(elemChapterTow[4], elemChapterTow[2]);
// свап 5 главы перед приложением C
list[1].insertBefore(elemChapterTow[5], elemChapterTow[2]);
// свап приложения C перед приложением D
list[1].insertBefore(elemChapterTow[2], elemChapterTow[10]);

/*
Введение = elemChapterTow[0]
Предисловие = elemChapterTow[1]
Приложение C = elemChapterTow[2]
Глава 1 = elemChapterTow[3]
Глава 4 = elemChapterTow[4]
Глава 5 = elemChapterTow[5]
Глава 2 = elemChapterTow[6]
Приложение A = elemChapterTow[7]
Глава 3 = elemChapterTow[8]
Приложение B = elemChapterTow[9]
Приложение D = elemChapterTow[10]
*/

// классы для элементов списка 5 книги
for(let i = 0; i < elemList.length; i++){
    if(i > 35 && i < 47){
        elemList[i].className = "elem_chapter_five";
    }
}
let elemChapterFive = document.querySelectorAll(".elem_chapter_five");
// свап 4 главы перед 5 
list[4].insertBefore(elemChapterFive[2],elemChapterFive[6]);
// свап 1 главы перед 2
list[4].insertBefore(elemChapterFive[9],elemChapterFive[3]);
// свап приложения A перед приложением B
list[4].insertBefore(elemChapterFive[5],elemChapterFive[8]);

/* 5 книга 
Введение = elemChapterFive[0]
Предисловие = elemChapterFive[1]
Глава 4 = elemChapterFive[2]
Глава 2 = elemChapterFive[3]
Глава 3 = elemChapterFive[4]
Приложение A = elemChapterFive[5]
Глава 5 = elemChapterFive[6]
Глава 6 = elemChapterFive[7]
Приложение B = elemChapterFive[8]
Глава 1 = elemChapterFive[9]
Приложение C = elemChapterFive[10]
*/

// классы для элементов списка 6 книги
for(let i = 0; i < elemList.length; i++){
    if(i > 46 && i < 57){
        elemList[i].className = "elem_chapter_six";
    }
}
let elemChapterSix = document.querySelectorAll(".elem_chapter_six");
let newElem = document.createElement("li");
newElem.classList.add("elem_chapter_six");
newElem.textContent = "Глава 8: За пределами ES6";

list[5].appendChild(newElem);
list[5].insertBefore(elemChapterSix[9], elemChapterSix[10]);