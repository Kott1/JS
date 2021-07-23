var jacket = {
    name: "Jacket",
    price: 150,
    src: "jacket.jpg"
};

var shirt = {
    name: "Shirt",
    price: 250,
    src: "shirt.jpg"
};

var shoes = {
    name: "Shoes",
    price: 50,
    src: "shoes.jpg"
};

var socks = {
    name: "Socks",
    price: 25,
    src: "socks.jpg"
};

var goods = [jacket, shirt, shoes, socks];
var sum = 0;
cartWrp = document.querySelector(".cart_wrp");
var pSum = document.createElement("p");
pSum.textContent = "Сума: ";
cartWrp.appendChild(pSum);

function renderItems() {
    var i, itemBlock;
    var itemWrp = document.querySelector(".item_wrp");
    for (i = 0; i < goods.length; i++) {
        //div
        itemBlock = document.createElement("div");
        itemBlock.classList.add("item");
        //img
        var img = document.createElement("img");
        img.src = "images/" + goods[i].src;
        itemBlock.append(img);
        //p
        var pName = document.createElement("p");
        pName.classList.add("item__txt");
        pName.textContent = goods[i].name;
        itemBlock.appendChild(pName);
        //span
        var pPrice = document.createElement("p");
        pPrice.classList.add("item__price");
        pPrice.textContent = goods[i].price;
        itemBlock.appendChild(pPrice);
        //button
        var btn = document.createElement("button");
        btn.classList.add("item__btn");
        btn.id = "btn_" + i;
        btn.textContent = "Buy";
        btn.onclick = addToCart;
        itemBlock.appendChild(btn);
        //append to catalog
        itemWrp.appendChild(itemBlock);
    }
}

function addToCart(e) {
    var button = e.target;
    var id = button.id.split("_")[1];
    var selectedItem = goods[id];
    //div
    var cartBlock = document.createElement("div");
    //info
    var cartInfo = document.createElement("span");
    cartInfo.textContent = selectedItem.name + " " + selectedItem.price;
    cartBlock.appendChild(cartInfo);
    cartWrp.appendChild(cartBlock);
    //sum
    sum += selectedItem.price;
    pSum.textContent = "Сумма: " + sum;
}

window.onload = renderItems();