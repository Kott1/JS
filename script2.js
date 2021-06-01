// 1-е задание--|

// var a = 1, b = 1, c, d;

// c = ++a;
// alert(c);// 2, потому что инкремент стоит перед переменной (а) и увеличивает его на 1;

// d = b++;
// alert(d);// 1, потому что инкремент стоит после переменной (а) и не увеличивает её;

// c = (2 + ++a);
// alert(c);// 5, потому что пременная (а) равнялась 2-м и её увеличили инкриментом на 1;

// d = (2 + b++);
// alert(d);// 4, потому что переменная (b) равнялась 1-му, а инкриментом её увеличили до 2-х;

// alert(a);// 3, так как переменную (а) увеличивали 2 раза инкриментом;
// alert(b);// 3, так как переменную (b) увеличивали 2 раза инкриментом;

// 2-е задание--|

// var a = 2;
// var x = 1 + (a *= 2);//Мы умножили переменную (а) на 2 и присвоили ей получившееся число 4. Добавили 1, в итоге ответ - 5;

// 3-е задание--|

// var a = +(Math.random() * (5 - (-5)) + (-5)).toFixed(0), b = +(Math.random() * (5 - (-5)) + (-5)).toFixed(0), c;
// alert(a);
// alert(b);
// if (a > 0 && b > 0) {
//     c = a - b;
//     alert(c);
// } else if (a < 0 && b < 0) {
//     c = a * b;
//     alert(c);
// } else if (a >= 0 && b <= 0 || a <= 0 && b >= 0) {
//     c = a + b;
//     alert(c);
// }

// 4-е задание--|

// function f(n) {
//     switch (n) {
//         case -1:
//             return;
//     }
//     console.log(n);
//     f(n - 1);
// }

// f((Math.random() * (15 - 0) + 0).toFixed(0));

// 5-е задание--|

// function sum(a, b) {
//     c = a + b;
//     console.log(c);
//     return;
// }

// function sub(a, b) {
//     c = a - b;
//     console.log(c);
//     return;
// }

// function mult(a, b) {
//     c = a * b;
//     console.log(c);
//     return;
// }

// function div(a, b) {
//     c = a / b;
//     console.log(c);
//     return;
// }

// sum(-2, 5);
// sub(3, 1);
// mult(2, 3);
// div(5, 2);

// 6-е задание--|

// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }
// function mult(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case '+':
//             return sum(arg1, arg2);

//         case '-':
//             return sub(arg1, arg2);

//         case '*':
//             return mult(arg1, arg2);

//         case '/':
//             return div(arg1, arg2);

//         default:
//             return "Неизвестный знак";
//     }

// }
// mathOperation(5, 2, prompt("Введите арифметический знак :"));

// 7-е задание--|

// var a = null, b = 0;

// console.log(a == b);//false, так как переменная (а) - объект, а переменная (b) - число.