document.onkeypress = function(e) {
    e = e || window.event;
    let charCode = e.keyCode || e.which;
    let charStr = String.fromCharCode(charCode);
    document.getElementById("przyciski-wyswietl").innerText = charStr.toUpperCase();
    document.getElementById("przyciski-opis").innerText = charCode;
};