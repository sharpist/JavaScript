var event = {
    title: "Конференция",
    date: "2019-10-20T12:00:00.000Z",
    window: window // преобразовать невозможно!
};
// преобразование значения в JSON-строку
var str = JSON.stringify(event, ["title", "date"]); // массив свойств, подлежащих сериализации
/*
var str = JSON.stringify(event, function(key, value) { // свойство с названием window игнорируется
    return (key == 'window') ?
        undefined : value;
});
*/
// интеллектуальное восстановление из строки
var event = JSON.parse(str, function(key, value) {
    return (key == 'date') ?
        new Date(value) : value;
});


// вывод
var options = {
    era: 'long', year: 'numeric', month: 'long',
    day: 'numeric', weekday: 'long', timezone: 'UTC',
    hour: 'numeric', minute: 'numeric', second: 'numeric'
};
alert(event.date.toLocaleString("ru", options)); // воскресенье, 20 октября 2019 г. 15:00:00
