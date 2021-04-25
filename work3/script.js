var imagesMass = ["img1.jpg","img2.jpg","img3.jpg"];
var curInd = 0;

function right(id){
var img = document.getElementById(id);

(curInd == 2) ? curInd = 0 : curInd++;

img.src = "img\\" + imagesMass[curInd]; 
}

function left(id){
    var img = document.getElementById(id);
    
    (curInd == 0) ? curInd = 2 : curInd--;
    
    img.src = "img\\" + imagesMass[curInd]; 
}