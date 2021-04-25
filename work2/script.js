var card1 = {
    price: 0,
    count: 0,
    summa: 0
}
var card2 = {
    price: 0,
    count: 0,
    summa: 0
}
var card3 = {
    price: 0,
    count: 0,
    summa: 0
}
var card4 = {
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
                card1.count = card1.count + 1;
                break;
            case 'card-2':
                card2.count = card2.count + 1;
                break;
            case 'card-3':
                card3.count = card3.count + 1;
                break;
            case 'card-4':
                card4.count = card4.count + 1;
                break;
        }
    } else {
        switch (id) {
            case 'card-1':
                newLi = document.createElement('li');
                newLi.innerHTML = 'MANGO PEOPLE T-SHIRT: 1';
                newLi.id = 'li_card-1';
                ol.appendChild(newLi);
                card1.count = 1;
                break;
            case 'card-2':
                newLi = document.createElement('li');
                newLi.innerHTML = 'MANGO PEOPLE T: 1';
                newLi.id = 'li_card-2';
                ol.appendChild(newLi);
                card2.count = 1;
                break;
            case 'card-3':
                newLi = document.createElement('li');
                newLi.innerHTML = 'MANGO PEOPLE: 1';
                newLi.id = 'li_card-3';
                ol.appendChild(newLi);
                card3.count = 1;
                break;
            case 'card-4':
                newLi = document.createElement('li');
                newLi.innerHTML = 'MANGO: 1';
                newLi.id = 'li_card-4';
                ol.appendChild(newLi);
                card14.count = 1;
                break;
        }
    }



    switch (id) {
        case 'card-1':
            card1.price = main1.getElementsByTagName('p')[1].innerHTML;
            card1.summa = card1.count * card1.price;
            break;
        case 'card-2':
            card2.price = main2.getElementsByTagName('p')[1].innerHTML;
            card2.summa = card2.count * card2.price;
            break;
        case 'card-3':
            card3.price = main3.getElementsByTagName('p')[1].innerHTML;
            card3.summa = card3.count * card3.price;
            break;
        case 'card-4':
            card4.price = main4.getElementsByTagName('p')[1].innerHTML;
            card4.summa = card4.count * card4.price;
            break;
    }

    if (li != null) {
        switch (id) {
            case 'card-1':
                li.innerHTML = "MANGO PEOPLE T-SHIRT: " + card1.count + " шт. по цене " + card1.price + " на сумму " + card1.summa;
                break;
            case 'card-2':
                li.innerHTML = "MANGO PEOPLE T: " + card2.count + " шт. по цене " + card2.price + " на сумму " + card2.summa;
                break;
            case 'card-3':
                li.innerHTML = "MANGO PEOPLE: " + card3.count + " шт. по цене " + card3.price + " на сумму " + card3.summa;
                break;
            case 'card-4':
                li.innerHTML = "MANGO: " + card4.count + " шт. по цене " + card4.price + " на сумму " + card4.summa;
                break;
        }
    } else {
        switch (id) {
            case 'card-1':
                newLi.innerHTML = "MANGO PEOPLE T-SHIRT: " + card1.count + " шт. по цене " + card1.price + " на сумму " + card1.summa;
                break;
            case 'card-2':
                newLi.innerHTML = "MANGO PEOPLE T: " + card2.count + " шт. по цене " + card2.price + " на сумму " + card2.summa;
                break;
            case 'card-3':
                newLi.innerHTML = "MANGO PEOPLE: " + card3.count + " шт. по цене " + card3.price + " на сумму " + card3.summa;
                break;
            case 'card-4':
                newLi.innerHTML = "MANGO: " + card4.count + " шт. по цене " + card4.price + " на сумму " + card4.summa;
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
var ss = card1.summa + card2.summa + card3.summa + card4.summa;
itog.innerHTML = "Всего:" + ss;


}