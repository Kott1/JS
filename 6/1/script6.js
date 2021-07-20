function genereteImage(id) {
    var img = document.getElementById(id);
    var change = img.src.replace('small', 'big');
    var bigImg = document.getElementById("big");
    bigImg.src = change;
}

function errorLoading() {
    alert("Нету большой картинки");
}