"use strict"
const age = 15;
console.log(age);

const name = " Віка ";
console.log( name )

const isStudent = true;
console.log(isStudent);

const myString = 'Не відкладай на потім';
console.log(myString)

let myNumber = 5;
console.log (myNumber + 10)

const myNull = null;
console.log(myNull)

const userName =prompt("Введіть своє ім'я.");
alert('Привіт!' + ' ' + userName);

// 8.Створити скрипт який виводить спливаюче підтвердження за допомогою confirm(). Якщо користувач 
//    підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється,
//    вивести повідомлення "Дію відмінено!".


const confirmUser = confirm('Ви підтверджуєте дію?');

  if(confirmUser) {
    alert("Дякую за підтвердження!");}
    else{
    alert("Дію відмінено!");}

    // 10.Створити скрипт який виводить спливаюче попередження за допомогою alert(). Вивести повідомлення 
    // про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm(). 
    // Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". 
    // Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".
   
    alert("Увага, небезпечна дія!")
    const confirming = confirm("Підтвердіть будь ласка дію")
    if(!confirming ){
        alert("Дію відмінено!")
    }
    else{
        alert("Дякую за підтвердження!")
    }


