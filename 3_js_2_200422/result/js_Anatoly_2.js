// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ":)"
let count = 1

while (count < 6){
    // let smile = ":)"
    console.log(count, smile)
    smile += ":)"
    count++
}