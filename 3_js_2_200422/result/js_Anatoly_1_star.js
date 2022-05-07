// выводим все промежуточные результаты

// let num = 2

// const exponentiation = function(exp){
//     let preresult = 1
//     let exp_temp = 0
//     while (exp_temp < exp){
//       let result = num * preresult
//         preresult *= num
//         exp_temp++
//         console.log("Итого,", num, "в степени ", exp_temp, "равно = ", result)
//     }
// }

// exponentiation(10)

// выводим только итоговый результат

let num = 2

const exponentiation = function(exp){
    let preresult = 1
    let exp_temp = 0

    for (exp_temp = 1; exp_temp <= exp; exp_temp++){
        if (exp_temp < exp){
            let result = num * preresult
            preresult *= num
        } else {
            let result = num * preresult
            preresult *= num
            console.log("Итого,", num, "в степени ", exp_temp, "равно = ", result)
        }
        }    
}

exponentiation(10)
