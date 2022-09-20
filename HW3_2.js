// Дан массив объектов.Каждый объект является идентификационной карточкой человека.Нам нужно хранить только уникальные значения в этом массиве.Реализуйте функцию, 
// которая будет выполнять эту работу.
// Task 2 *** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs.для дальнейшего использования в функции, описанной в задании

const fs = require ("fs");
let user = JSON.parse(fs.readFileSync("task2.json"));

// first option
function uniqueFunc() {
    let unique1 = [];
    user.forEach (el => {
        if(!unique1.includes(JSON.stringify(el)))  unique1.push(JSON.stringify(el))
    })

    return unique1.map(el => JSON.parse(el))
};
console.log(uniqueFunc());

//second option
let unique = Array.from(new Set(user.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));
console.log(unique.length);