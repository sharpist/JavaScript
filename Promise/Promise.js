function sum(a, b)
{
    return new Promise(function(resolve, reject)
    {
        setTimeout(function()
        {
            if (typeof a !== "number" || typeof b !== "number")
                return reject(new TypeError("ввод должен быть числом"));

            return resolve(a + b);
        }, 1000); // отправить ответ через 1 сек
    });
}

var myPromise = sum(10, 5) // 10 + 5 = 15
myPromise.then(function(res) {
    $('#output').append('<p>10 + 5 = '+res+'</p>'); // div id="output"
})
.catch(function(err) {
    document.write(err.message);
    console.log(err.message);
});
