// вывести дату в формате дд.мм.гг
//*********************************
function birthday(date) {
    var birthday = "27.04.19";
  
    if (date == birthday) {
        document.write(
            "С Днём Рождения!"                      + "<br \/>" +
            "Желаю всяческих успехов в твоём деле!" + "<br \/>" +
            "Адекватной оценки и надёжных партнёров!");
    }
}

birthday(formatDate(new Date()));

function formatDate(date) {
    var dd = date.getDate(); // день
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1; // месяц (начиная с нуля) + 1 = 1-12
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100; // год (в 4-ом формате) '%' = 2-ое
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}
