// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let res = '';
let i = 10
while (i <= 20) {
    res += i + ' ';
    i += 1;
}
console.log(res);



// Вивести квадрати чисел від 10 до 20.
// for (let i = 10; i < 21; i++) {
//     console.log(i * i);
// }



// Вивести таблицю множення на 7.
// for (let i = 1; i < 11; i++) {
//     console.log(`7 * ${i} = ` + i * 7);
// }



// Знайти суму всіх цілих чисел від 1 до 15.
// let sum = 0;
// for (let i = 1; i < 16; i++) {
//         sum += i;
// }
// console.log(sum);



// Знайти добуток усіх цілих чисел від 15 до 35.
// let sum = 1;
// for (let i = 15; i < 36; i++) {
//     sum = sum * i;
// }
// console.log(sum);



// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// let sum = 0;
// for (let i = 1; i < 500; i++) {
//     sum += i;
// }
// console.log(sum / 500);



// Вивести суму лише парних чисел в діапазоні від 30 до 80.
// let i = 30
// let summ = 0;
// while (i <= 80) {
//     if (i % 2 == 0) {
//         summ += i;
//     }
//     i++
// }
// console.log(summ);



// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// for (let i = 100; i <= 200; i++) {
//     if (i % 3 == 0) {
//         console.log(i);
//     }
// }




// Дано натуральне число.Знайти та вивести на сторінку всі його дільники.
// let num = +prompt(`Ведите число:`);
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         console.log(i);
//     }
// }




// Визначити кількість його парних дільників.
// let num = +prompt(`Ведите число:`);
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         if (i % 2 == 0) {
//             sum += 1;
//         }
//     }
// }
// console.log(sum);




// Знайти суму його парних дільників.
// let num = +prompt(`Ведите число:`);
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         if (i % 2 == 0) {
//             sum += i;
//         }
//     }
// }
// console.log(sum);



// Надрукувати повну таблицю множення від 1 до 10.
// for (let j = 1; j <= 10; j++) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${j} * ${i} = ` + i * j);
//     }
// }




// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0, 5(20 20, 5 21 21, 5….).
// let res = '';
// let i = 20
// while (i <= 30) {
//     res += i + ' ';
//     i += 0.5;
// }
// console.log(res);




// Один долар коштує 27 гривень.Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// let curs = 27;
// console.log(`1 доллар стоит 27 грн`)
// for (i = 10; i <= 100; i += 10) {
//     console.log(`${i}$ стоит ` + curs * i);
// }






// Дане ціле число.Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// let num = +prompt(`Введіть число:`);
// let i = 1;
// while (i <= 100) {
//     if (num > i * i) {
//         console.log(i);
//     } else {
//         break;
//     }
//     i += 1;
// }





// Дане ціле число.З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// let num = +prompt(`Ведите число:`);
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         sum += 1;
//     }
// }
// if (sum == 2) {
//     console.log('Число є простим');
// }
// else {
//     console.log('Число не є простим');
// }





// Дане деяке число.Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
// let i = 3;
// let num = +prompt(`Ведите число:`);
// while (num % i == 0) {
//     num /= i;
// }
// if (num == 1) {
//     console.log('Данне число є степінью числа 3');
// } else {
//     console.log('Данне число не є степінью числа 3');
// }