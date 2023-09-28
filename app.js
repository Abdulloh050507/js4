// 1 :


// imya = prompt("Введите имя:");
// age = +prompt("Введите свой год рождения:");
// data = +prompt("Введите актуальный год:");

// let info = function (age,data) {
//     let res = data - age 
//     return(imya + ', ' + 'Ваш возраст: ' + res)
// }
// console.log(info(age,data));




// 2 :


function r(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

let maxPrimer = +prompt('Введите кол-во примеров');
let minNumber = +prompt('Введите мин диапазон');
let maxNumber = +prompt('Введите макс диапазон');


for (let i = 1; i <= maxPrimer; i++) {
    let one = r(minNumber, maxNumber)
    let two = r(minNumber, maxNumber)
    let primer = r(1, 4)
    let res = 0
    if (primer == 1) {
        res = +prompt(one + ' + ' + two + ' =')
        alert(one + ' + ' + two + ' = ' + res + ' ' + ((one + two) == res ? 'Молодец' : 'Слабак'))
    }else if(primer == 2){
        res = +prompt(one + ' - ' + two + ' =')
        alert(one + ' - ' + two + ' = ' + res + ' ' + ((one - two) == res ? 'Молодец' : 'Слабак'))
    }else if(primer == 3) {
        res = +prompt(one + ' * ' + two + ' =')
        alert(one + ' * ' + two + ' = ' + res + ' ' + ((one * two) == res ? 'Молодец' : 'Слабак'))
    }
    else if(primer == 4) {
        res = +prompt(one + ' / ' + two + ' =')
        alert(one + ' / ' + two + ' = ' + res + ' ' + ((one / two) == res ? 'Молодец' : 'Слабак'))
    }
}