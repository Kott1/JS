// 1-е задание--|

// var number = +prompt("Введите любое число от 0 до 999");
// obj = {}
// convert(number);

// function convert(number) {
//     if (number < 0 || number > 999) {
//         alert("Вы ввели некорректное число")
//     } else {
//         obj.sot = parseInt(number / 100);
//         obj.des = parseInt(number % 100 / 10);
//         obj.ed = number % 10;
//     }
// }

// console.log(obj);

// 2-е задание--|

// var answers = [];

// var event, ok;

// do {
//     ok = false;
//     event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
//     if (event == -1) {
//         break;
//     }
//     else {
//         ok = isAnswer(works.a0, event);
//         if (event == 1) {
//             answers.push(works.a1)
//         } else {
//             answers.push(works.a2)
//         }
//     }
// } while (!ok);

// switch (event) {
//     case 1:
//         do {
//             ok = false;
//             event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
//             if (event == -1) {
//                 break;
//             }
//             else {
//                 ok = isAnswer(works.b0, event);
//                 if (event == 1) {
//                     answers.push(works.b1)
//                 } else {
//                     answers.push(works.b2)
//                 }
//             }
//         } while (!ok);

//         switch (event) {
//             case 1:
//             case 2:
//                 actionD();

//             case -1:
//                 break;
//             default:
//                 alert('Ошибка');
//         }
//         break;

//     case 2:
//         do {
//             ok = false;
//             event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
//             if (event == -1) {
//                 break;
//             }
//             else {
//                 ok = isAnswer(works.c0, event);
//                 if (event == 1) {
//                     answers.push(works.c1)
//                 } else {
//                     answers.push(works.c2)
//                 }
//             }
//         } while (!ok);

//         switch (event) {
//             case 1:
//             case 2:
//                 actionD();

//             case -1:
//                 break;
//             default:
//                 alert('Ошибка');
//         }
//         break;

//     case -1:
//         break;
//     default:
//         alert('Ошибка');
// }
// alert('Спасибо за игру');

// function actionD() {
//     do {
//         ok = false;
//         event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
//         if (event == -1) {
//             break;
//         }
//         else {
//             ok = isAnswer(works.d0, event);
//             if (event == 1) {
//                 answers.push(works.d1)
//             } else {
//                 answers.push(works.d2)
//             }
//         }
//     } while (!ok);
//     return;
// }

// console.log(answers);

// var questionForPlayer = +prompt("На какой вопрос Вы хотите посмотреть свой ответ?");
// if (questionForPlayer == 1) {
//     alert("На вопрос : \n" + works.a00 + "Вы ответили - " + answers[0])
// } else if (questionForPlayer == 2 && answers[1] == (works.b1 || works.b2)) {
//     alert("На вопрос : \n" + works.b00 + "Вы ответили - " + answers[1])
// } else if (questionForPlayer == 2 && answers[1] == (works.c1 || works.c2)) {
//     alert("На вопрос : \n" + works.c00 + "Вы ответили - " + answers[1])
// } else if (questionForPlayer == 3) {
//     alert("На вопрос : \n" + works.d00 + "Вы ответили - " + answers[2])
// }

// function isAnswer(q, event) {
//     if (isNaN(event) || !isFinite(event)) {
//         alert('Вы ввели недопустимый символ');
//         return false;
//     }
//     else if (event < 1 || event > q) {
//         alert('Ваше число выходит из допустимого диапозона');
//         return false;
//     }
//     return true;
// }