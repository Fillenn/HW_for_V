// 1. Написать скриптик, который сосчитает и выведет результат от:
//  возведения 2 в степень 10, начиная со степени 1

// выводим только итоговый результат:

let num = 2
let exp = 1
let preresult = 1


for (exp = 1; exp <= 10; exp++){
    if (exp < 10){
    let result = num * preresult

    preresult *= num
    } else {
        let result = num * preresult

    preresult *= num
      console.log("Итого,", num, "в степени ", exp, "равно = ", result)
    }
}


// выводим все промежуточные результаты:

// let num = 2
// let exp = 1
// let preresult = 1

// for (exp = 1; exp <= 10; exp++){

//     if (exp < 10){
//     let result = num * preresult
//     console.log("Итого,", num, "в степени ", exp, "равно = ", result)
//     preresult *= num

//     } else {
//         let result = num * preresult
//     preresult *= num
//       console.log("Итого,", num, "в степени ", exp, "равно = ", result)
//     }
// }