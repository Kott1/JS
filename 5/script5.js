// 1-е, 2-е и 3-е задания--|

var table = document.createElement("table");
table.className = "desk";
var figures = {
    king: "&#9812",
    queen: "&#9813",
    castle: "&#9814;",
    bishop: "&#9815;",
    knight: "&#9816;",
    pawn: "&#9817;",
};

function genereteDesk() {
    for (var i = 1; i <= 9; i++) {
        var tr = document.createElement("tr");
        table.append(tr);
        tr.className = "tr";
        for (var j = 1; j <= 9; j++) {
            var td = document.createElement("td");
            tr.append(td);
            td.className = "td";
            if ((i + j) % 2 == 0) {
                td.className = "white";
            } else {
                td.className = "black";
            }
        }
    }
}

var tdlist = document.querySelectorAll('td')

for (i = 48; i < tdlist.length; i++) {
    tdlist[i].style.color = '#000';
}
var tdArr = Array.from(tdlist);

var result = tdArr.filter(function (elem) {

    switch (tdArr.indexOf(elem)) {
        case 0: case 7: case 56: case 63:
            elem.innerHTML = figures.castle;
            break;
        case 1: case 6: case 57: case 62:
            elem.innerHTML = figures.knight;
            break;
        case 2: case 5: case 58: case 61:
            elem.innerHTML = figures.bishop;
            break;
        case 4: case 60:
            elem.innerHTML = figures.queen;
            break;
        case 3: case 59:
            elem.innerHTML = figures.king;
            break;
    }
    if (tdArr.indexOf(elem) > 7 && tdArr.indexOf(elem) < 16 || tdArr.indexOf(elem) > 47 && tdArr.indexOf(elem) < 56) { // добавляем пешки
        elem.innerHTML = figures.paw;
    }
}
);

document.getElementsByClassName("block")[0].append(table);
genereteDesk();