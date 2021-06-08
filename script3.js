// 1-е задание--|

// var a = 2;

// while (a <= 100) {
//     if (check(a)) {
//         console.log(a);
//     }
//     a++;
// }

// function check(num) {
//     var b = 2;
//     while (b < num / 2) {
//         if (num % b == 0) {
//             return false;
//         }
//         b++;
//     }
//     return true;
// }

// 2-е и 3-е задания--|

// var basket = [
//     {
//         title: "Товар 1",
//         price: 100,
//         amount: 2
//     },
//     {
//         title: "Товар 2",
//         price: 200,
//         amount: 5
//     },
//     {
//         title: "Товар 3",
//         price: 300,
//         amount: 1
//     }
// ];

// function countBasketAmount(amount) {
//     var b = 0;
//     for (var a of amount) {
//         b += a.amount;
//     }
//     return b;
// }
// alert("В корзине находится " + countBasketAmount(basket) + " товаров");

// function countBasketPrice(mult) {
//     var b = 0;
//     for (var a of mult) {
//         b += (countBasketAmount(basket) * a.price);
//     }
//     return b;
// }

// alert("Стоимость " + countBasketAmount(basket) + " товаров составляет: " + countBasketPrice(basket));\\

// 4-е задание--|

// for (var i = 0; i <= 9; console.log(i++));

// 5-е задание--|

// var str = "";

// for (var i = 0; i <= 20; i++) {
//     str += "x";
//     console.log(str);
// }
