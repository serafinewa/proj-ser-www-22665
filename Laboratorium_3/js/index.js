var theme = document.createElement("button");
theme.innerHTML = "Zmień tło";
theme.style.marginRight= "10px";
theme.style.backgroundSize = "cover";
theme.style.backgroundColor = "silver"
theme.style.color = "black";
document.getElementById("nav").appendChild(theme);

var bdy = document.getElementById("body");
theme.onclick = function (){
    if(bdy.style.color!=="black"){
        bdy.style.backgroundImage = 'url("assets/black_back.png")';
        bdy.style.color = "black";
    }else{
        bdy.style.backgroundImage = 'url("assets/background.png")';
        bdy.style.color = "white";
    }

};

var stopka = document.getElementById('stopka');

function resize(elem, percent) { elem.style.fontSize = percent; }

stopka.addEventListener('mouseover',function (){
    resize(this, '150%');
});
stopka.addEventListener('mouseout',function (){
    resize(this, '100%');
});