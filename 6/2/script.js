var goods = [
    { title: 'shirt', price: 150 },
    { title: 'socks', price: 50 },
    { title: 'jacket', price: 350 },
    { title: 'shoes', price: 250 },
];

var cart = document.querySelector(".cart");
var buttons = document.querySelectorAll(".card__txt");


buttons.forEach(function (button) {
    button.addEventListener('click', addToCart);
});


// function addToCart(event) {
//     console.log(event.target);
// }

// buttons.forEach(button => {
//     button.addEventListener('click', addToCart());
// });