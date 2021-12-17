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

// 17.12 Laboratorium 5
window.onload = zegar ;

// zadanie 1

var daneosoby = {
    "imie":"Ewa",
    "nazwisko":"Marchewka",
    "wiek":21,
    "oceny": {
        "matematyka": 5,
        "plastyka": 6,
        "angielski": {
            "zwykły":5,
            "rozszerzony":5
        }
    }
}

const lata = daneosoby.wiek;
const ocenaPlastyka = daneosoby.oceny.plastyka;

function dodawanieLiczb(a, b, fn){
    const wynik = a + b;
    fn(wynik);
}

dodawanieLiczb(lata, ocenaPlastyka, function(suma){
    console.log("Zadanie 1.1 - Wynikiem dodawania jest : " + suma);
});

function getImie(fn) {
    const imieUcznia = daneosoby.imie;
    fn(imieUcznia)
}

getImie(function(imie) {
    const nazwiskoUcznia = daneosoby.nazwisko;
    console.log("Zadanie 1.2 - Uczeń " + imie + " ma na nazwisko " + nazwiskoUcznia);
})

// zadanie 2
const posty = fetch('https://jsonplaceholder.typicode.com/posts');

function getPostId(response) {
    return new Promise((resolve, reject) => {
        if(response !== 1) {
            resolve(response);
        } else {
            reject("Zadanie 2.1 - error");
        }
    });
}

getPostId(posty).then(response => response.json().then(function(data){
    var wynik = data[0].id + data[1].id;
    console.log("Zadanie 2.1 - Wynikiem dodawania jest: " + wynik);
}))
    .catch(blad => console.log("Zadanie 2.1 - error", blad))
    .finally(() => console.log("Zadanie 2.1 - completed"));

const posty2 = fetch('https://jsonplaceholder.typicode.com/posts');


function getPost(response){
    return new Promise((resolve, reject) => {
        if(response !== 1){
            resolve(response);
        } else{
            reject("Zadanie 2.2 - error");
        }
    })
}

getPost(posty2).then(response => response.json().then(function(data) {
    var komunikat = "Zadanie 2.2 - Title: " + data[1].title + " Body: " + data[2].body;
    console.log(komunikat);
}))
    .catch(blad => console.log("Zadanie 2.2 - error", blad))
    .finally(() => console.log("Zadanie 2.2 - completed"));

// zadanie 3
var link = 'https://jsonplaceholder.typicode.com/posts/1';

function dodawanieAsync(id, userId){
    console.log("Zadanie 3 - Wynikiem dodawania " + id + " + " + userId + " jest :");
    return(id+userId);
}

function postAsync(title, body){
    var kom = { title: title, body: body };
    return(kom);
}

async function asyncAwait(link) {
    let response = await fetch(link);
    if(response.ok) {
        JsonObject = await response.json();
        title = JsonObject.title;
        body = JsonObject.body;
        id = JsonObject.id;
        userId = JsonObject.userId;
        console.log(dodawanieAsync(id, userId));
        console.log(postAsync(title, body));
    }
}

asyncAwait(link);

// zadanie 4
function dodawanieAjax(id, userId){
    console.log("Zadanie 4 - Wynikiem dodawania " + id + " + " + userId + " jest :");
    return(id+userId);
}

function postAjax(title, body){
    var kom = { title: title, body: body };
    return(kom);
}

let post10 = 'https://jsonplaceholder.typicode.com/posts/10';
let xmlhttpr = new XMLHttpRequest();

xmlhttpr.open('GET', post10);
xmlhttpr.responseType = 'json';
xmlhttpr.send();

xmlhttpr.onload = function() {
    let odp = xmlhttpr.response;
    title = odp.title;
    body = odp.body;
    id = odp.id;
    userId = odp.userId;
    console.log(dodawanieAjax(id, userId));
    console.log(postAjax(title, body));
};
xmlhttpr.onerror = function() {
    console.log("Zadanie 4 - error");
}

// zadanie 5
const post7 = fetch('https://jsonplaceholder.typicode.com/posts/7');

post7.then(function (response){
    response.json().then(function (data){
        console.log("Zadanie 5 - Wynikiem dodawania " + data.id + " + " + data.userId + " jest : " + (data.id + data.userId));
        var kom = { title: data.title, body: data.body };
        console.log(kom);
    });
})

// zadanie 6
let post12 = 'https://jsonplaceholder.typicode.com/posts/12';
axios.get(post12)
    .then(function (response){
        title = response.data.title;
        body = response.data.body;
        id = response.data.id;
        userId = response.data.userId;
        console.log("Zadanie 6 - Wynikiem dodawania " + id + " + " + userId + " jest : " + (id + userId));
        var kom = { title: title, body: body };
        console.log(kom);
    })

function zegar(){
	var data = new Date();

    var rok = data.getYear() - 100;
	var miesiac = data.getMonth() + 1;
	var dzien = data.getDate();
	var godzina = data.getHours();
	var minuta = data.getMinutes();
	var sekunda = data.getSeconds();

	if(miesiac < 10) miesiac = "0" + miesiac;
	if(dzien < 10) dzien = "0" + dzien;
	if(godzina < 10) godzina = "0" + godzina;
	if(minuta < 10) minuta = "0" + minuta;
	if(sekunda < 10) sekunda = "0" + sekunda;

	var komunikat = dzien + "/" + miesiac + "/" + rok + " " + godzina + ":" + minuta + ":" + sekunda;
	document.getElementById("aktualna-data").innerHTML = komunikat;
	setTimeout("zegar()",1000);

}

