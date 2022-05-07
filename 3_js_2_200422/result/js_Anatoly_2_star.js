// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function Lesenka(numberOfRows, stroka){
    let numberOfRows_temp = 0
    let stroka_temp = stroka
    while (numberOfRows_temp < numberOfRows){
        console.log(numberOfRows_temp, stroka_temp)
        numberOfRows_temp++
        stroka_temp += stroka
    }
}
Lesenka(10, "(＾◡＾)")