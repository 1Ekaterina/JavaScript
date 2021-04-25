var product = {
    price: 0,
    count: 0,
    summa: 0
}

function add(id) {

    var d = document.getElementById(id);
    var ol = document.getElementById('list');
    var li = document.getElementById("li_" + id);

    if (li != null) {
        switch (id) {
            case 'card-1':
                card1.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
            case 'card-2':
                card2.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
            case 'card-3':
                card3.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
            case 'card-4':
                Yellow.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
        }
    } else {
        switch (id) {
            case 'red':
                newLi = document.createElement('li');
                newLi.innerHTML = 'Red: 1';
                newLi.id = 'li_red';
                ol.appendChild(newLi);
                Red.count = 1;
                break;
            case 'blue':
                newLi = document.createElement('li');
                newLi.innerHTML = 'Blue: 1';
                newLi.id = 'li_blue';
                ol.appendChild(newLi);
                Blue.count = 1;
                break;
            case 'yellow':
                newLi = document.createElement('li');
                newLi.innerHTML = 'Yellow: 1';
                newLi.id = 'li_yellow';
                ol.appendChild(newLi);
                Yellow.count = 1;
                break;
        }
    }



    switch (id) {
        case 'red':
            Red.price = d.getElementsByTagName('p')[0].innerHTML;
            Red.summa = Red.count * Red.price;
            break;
        case 'blue':
            Blue.price = d.getElementsByTagName('p')[0].innerHTML;
            Blue.summa = Blue.count * Blue.price;
            break;
        case 'yellow':
            Yellow.price = d.getElementsByTagName('p')[0].innerHTML;
            Yellow.summa = Yellow.count * Yellow.price;
            break;
    }

    if (li != null) {
        switch (id) {
            case 'red':
                li.innerHTML = "Red: " + Red.count + " шт. по цене " + Red.price + " на сумму " + Red.summa;
                break;
            case 'blue':
                li.innerHTML = "blue: " + Blue.count + " шт. по цене " + Blue.price + " на сумму " + Blue.summa;
                break;
            case 'yellow':
                li.innerHTML = "yellow: " + Yellow.count + " шт. по цене " + Yellow.price + " на сумму " + Yellow.summa;
                break;
        }
    } else {
        switch (id) {
            case 'red':
                newLi.innerHTML = "Red: " + Red.count + " шт. по цене " + Red.price + " на сумму " + Red.summa;
                break;
            case 'blue':
                newLi.innerHTML = "blue: " + Blue.count + " шт. по цене " + Blue.price + " на сумму " + Blue.summa;
                break;
            case 'yellow':
                newLi.innerHTML = "yellow: " + Yellow.count + " шт. по цене " + Yellow.price + " на сумму " + Yellow.summa;
                break;
        }

    }

var ii = document.getElementById('itog');
if (ii != null){
ii.parentNode.removeChild(ii);
}


var itog = document.createElement('li');
itog.id = 'itog';

ol.appendChild(itog);
var ss = Red.summa + Blue.summa + Yellow.summa;
itog.innerHTML = "Всего:" + ss;


}