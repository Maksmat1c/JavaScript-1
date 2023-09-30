// // Базовые арифмитические операторы

// const width = 10;
// const height = 5;
// // const space =  10 * 5;
// const space = height * width;
// const newheight = width - 4;
// const newheight2 = width + 4;
// const division = newheight / newheight2;
// const volume = 2 ** 3;//2 * 2 * 2

// console.log(space);

// console.log(newheight2);

// console.log(division);

// console.log(volume);


// //Строковые операции

// const city = "Pskov";
// const street = "Народная";

// console.log(city + ", "+ street + ' ' + 5);




// // Операторы присваивания

// let age = 10 + 5;

// age += 0.5; //age = age + 0.5
// age -= 8;  //age = age - 8
// age *= 2; //age = age * 2
// age /= 2; // age= age / 2
// age ++; //age = age + 1
// age --; //age = age -1

// console.log(age)



// //  Операторы сравнения 

// const vasia = 20;
// console.log(age > vasia);
// console.log(age >= vasia);
// console.log(age < vasia);
// console.log(age <= vasia);
// console.log(age == vasia);

// // Порядок операторов
// const isSuited = 100 -  10 > 90 - 5;

// console.log(isSuited);

// // 100 - (12-  приоритет) 10 > (10-  приоритет) 90 - (12-  приоритет) 5 

// // сначала выполняется операторы с большим приоритетом

// const a = (6 + 10) / 2
// console.log(a)

// let b;
// let c;
// c = b = 100 + 50 + 30;
// console.log(c);
// console.log(b);



// // Типы данных

// let a = 5;
// let b = 6;
// console.log(typeof a );
// console.log(typeof b );
// a = 'строка';
// console.log(typeof a);
// let isAdmin = a > 10;
// console.log(typeof isAdmin);
// e = 'sfdsf'
// console.log(typeof e);

// let c;
// console.log(typeof c);
// c = 5;
// console.log(typeof c);

// let d = null;
// console.log(typeof d == null);

// // задача

// /*?Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
// К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
// Выведете в консоль:
// Boolean переменную успеете ли вы взяться за работу
// Сколько вы за неё попросите?*/


// // Даннные
// const money = 80; 
// const generaldays = (11 - 2)  * 5; 
// const all_hours = 40; 

// // результат
// console.log( "Смогу ли я работать:" + ', ' + (all_hours < generaldays))
// console.log('Мани мани:' + ' ,' + all_hours * money + '$');


// alert("Привет бро!");

let admin;
let name = 'Джон';
admin = name ;
alert(admin)