/* при сериализации объекта вызывается его метод toJSON,
если такого метода нет – перечисляются его свойства, кроме функций */
var room = {
    number: 109,
    occupy: function() { // игнорируется
        alert( this.number );
    }
};

var event = {
    title: "Конференция",
    date: new Date(Date.UTC(2019, 9, 20, 15, 00)), // включает метод toJSON
    room: room // не включает метод toJSON
};
// вывод
alert(JSON.stringify(event, "", 4));
/*
    {
        "title": "Конференция",
        "date": "2019-10-20T15:00:00.000Z",
        "room": {
            "number": 109
        }
    }
*/

/* если добавить метод toJSON, тогда в вывод попадёт его результат */
var room2 = {
    number: 109,
    toJSON: function() {
        return this.number;
    },
    occupy: function() { // игнорируется
        alert( this.number );
    }
};

var event2 = {
    title: "Конференция",
    date: new Date(Date.UTC(2019, 9, 20, 15, 00)), // включает метод toJSON
    room: room2 // включает метод toJSON
};
// вывод
alert(JSON.stringify(event2, "", 4));
/*
    {
        "title": "Конференция",
        "date": "2019-10-20T15:00:00.000Z",
        "room": 109
    }
*/
