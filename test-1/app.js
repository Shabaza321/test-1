function containsOnlyDigits(regExp) {
    return /^\d+$/.test(regExp);
}


console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));




// 2

//
// const printMessageEverySecond = () => {
//     setInterval(() => {
//         console.log("Прошла секунда");
//     }, 1000);
// }
//
// printMessageEverySecond();


// 3

// const count = () => {
//     let i = 1;
//     // Устанавливаем интервал в 1000 миллисекунд (1 секунда)
//     const interval = setInterval(() => {
//         console.log(i);
//         i++;
nb
//         if (i > 10) {
//             clearInterval(interval);
//         }
//     }, 1000);
// }
//
// count();







