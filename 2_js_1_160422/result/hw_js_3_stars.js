// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
let age_2 = 18
let age_3 = 60

const checkAge = function(age) {
//     console.log(`Your age is - ` + age + `, and`)
//  age = Number(age)
// if (!isNaN(age)) { // Подсказка Анатолия
//  if (Number(age)) {  // Подсказка Анатолия
    if (+age || +age == 0) {

        if (age < age_2) {
                console.log("You don’t have access cause your age is " + age + ". It’s less then")
            } else if (age >= age_2 && age < age_3) {
                    console.log(`Welcome !`)
            } else if (age > age_3) {
                    console.log (`Keep calm and look Culture channel`)
        } else {
                console.log("Technical work") 
        }      
    } else {
        console.log("Not integer value") }
}

checkAge(60)
checkAge("0")
checkAge("tyhr")