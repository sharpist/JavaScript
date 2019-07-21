function out()
{
    var args = Array.prototype.slice.call(arguments, 0);
    var formatted = args.map(a => {
        if(isObject(a)) {
            return JSON.stringify(a, "", 4);
        }
        return a;
    });
    // вывод
    document.getElementById("output").innerHTML += formatted.join(" ") + '<br />';
}
function isObject(obj) {
    return obj === Object(obj);
}

// набор тестовых объектов
var people = [
    { name: "Кирилл",    age: 30 }, { name: "Юрий",      age: 27 },
    { name: "Анастасия", age: 19 }, { name: "Илья",      age: 35 },
    { name: "Артём",     age: 40 }, { name: "Наталья",   age: 21 },
    { name: "Евгения",   age: 18 }, { name: "Дмитрий",   age: 28 },
    { name: "Катерина",  age: 24 }, { name: "Александр", age: 26 }
];


// filter эквивалент Where
var group_1 = people.filter(function (item) {
    return item.age > 25;
});
// ECMAScript 6 синтаксис
let group_2 = people.filter(p => p.age < 25);

// вывод
out("первая группа От 25");
out(JSON.stringify(group_1, "", 4));
out("вторая группа До 25");
out(group_2);
out();
/*
    первая группа От 25
    [ { "name": "Кирилл", "age": 30 }, { "name": "Юрий", "age": 27 }, { "name": "Илья", "age": 35 }, { "name": "Артём", "age": 40 }, { "name": "Дмитрий", "age": 28 }, { "name": "Александр", "age": 26 } ]
    вторая группа До 25
    [ { "name": "Анастасия", "age": 19 }, { "name": "Наталья", "age": 21 }, { "name": "Евгения", "age": 18 }, { "name": "Катерина", "age": 24 } ]
*/


// map эквивалент Select
var names_1 = people.map(function (item) {
    return item.name;
});
// ES6 синтаксис
let names_2 = people.map(i => i.name);

// вывод
out("имена всех людей");
out(names_1);
out(names_2);
out();
/*
    имена всех людей
    [ "Кирилл", "Юрий", "Анастасия", "Илья", "Артём", "Наталья", "Евгения", "Дмитрий", "Катерина", "Александр" ]
    [ "Кирилл", "Юрий", "Анастасия", "Илья", "Артём", "Наталья", "Евгения", "Дмитрий", "Катерина", "Александр" ]
*/


// every эквивалент All
var allUnder25_1 = people.every(function (item) {
    return item.age < 25;
});
// ES6 синтаксис
let allUnder25_2 = people.every(i => i < 25);

// вывод
out("все ли люди моложе 25 лет?"); // false
out(allUnder25_1);
out(allUnder25_2);
out();
/*
    все ли люди моложе 25 лет?
    false
    false
*/


// some эквивалент Any
var anyOver25_1 = people.some(function (item) {
    return item.age > 25;
});
// ES6 синтаксис
let anyOver25_2 = people.some(p => p.age > 25);

// вывод
out("есть ли люди старше 25 лет?"); // true
out(anyOver25_1);
out(anyOver25_2);
out();
/*
    есть ли люди старше 25 лет?
    true
    true
*/


// reduce эквивалент Aggregate (может использоваться как Sum)
var aggregate_1 = people.reduce(function (item1, item2) {
    return { name: '', age: item1.age + item2.age };
});
// ES6 синтаксис
/* здесь возвращаемый литерал объекта заключён в (),
иначе {} будут считаться обозначающими тело функции */
let aggregate_2 = people.reduce((a, b) => ({name: '', age: a.age + b.age}));

// вывод
out("общий возраст"); 
out(aggregate_1.age);
out(aggregate_2.age);
out();
/*
    общий возраст
    268
    268
*/


// sort эквивалент OrderBy (но сортирует массив на месте)
var orderByName_1 = people.sort(compare);
function compare(a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0; // взаимный порядок не имеет значения
}
// ES6 синтаксис
let orderByName_2 = people.sort((a, b) => a.name > b.name ? 1 : -1);

// вывод
out("упорядочить по имени"); 
out(orderByName_1);
out(orderByName_2);
out();
/*
    упорядочить по имени
    [ { "name": "Александр", "age": 26 }, { "name": "Анастасия", "age": 19 }, { "name": "Артём", "age": 40 }, { "name": "Дмитрий", "age": 28 }, { "name": "Евгения", "age": 18 }, { "name": "Илья", "age": 35 }, { "name": "Катерина", "age": 24 }, { "name": "Кирилл", "age": 30 }, { "name": "Наталья", "age": 21 }, { "name": "Юрий", "age": 27 } ]
    [ { "name": "Александр", "age": 26 }, { "name": "Анастасия", "age": 19 }, { "name": "Артём", "age": 40 }, { "name": "Дмитрий", "age": 28 }, { "name": "Евгения", "age": 18 }, { "name": "Илья", "age": 35 }, { "name": "Катерина", "age": 24 }, { "name": "Кирилл", "age": 30 }, { "name": "Наталья", "age": 21 }, { "name": "Юрий", "age": 27 } ]
*/


// можно связать в цепочку вызовы функций
var namesOver25Order_1 = people
.filter(function (person) {
    return person.age > 25;
})
.map(function (person) {
    return person.name;
})
.sort(function (a, b) {
	return a > b ? 1 : -1;
});
// ES6 синтаксис
let namesOver25Order_2 = people
    .filter(p => p.age > 25)
    .map(p => p.name)
    .sort((a, b) => a > b ? 1 : -1);

// вывод
out("имена всех людей старше 25 упорядочены по убыванию");
out(namesOver25Order_1);
out(namesOver25Order_2);
out();
/*
    имена всех людей старше 25 упорядочены по убыванию
    [ "Александр", "Артём", "Дмитрий", "Илья", "Кирилл", "Юрий" ]
    [ "Александр", "Артём", "Дмитрий", "Илья", "Кирилл", "Юрий" ]
*/
