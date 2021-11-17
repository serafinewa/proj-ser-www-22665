window.onload = fixName ;

function fixName(){
    var imie = window.prompt("Podaj swoję imię :");
    if(imie.length === 0){
        alert("Nic nie zostało wpisane:(");
    } else {
        var imiePoprawne = capitalizeFirstLetter(imie);
        console.log("Imię " + imiePoprawne + " rozpoczyna się literką " + imie.charAt(0));
    }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}