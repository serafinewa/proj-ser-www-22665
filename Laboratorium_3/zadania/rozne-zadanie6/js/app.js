function checkMonth(name, month) {
    var monthFix = month.toLowerCase();
    if (name !== "") {
        switch (monthFix) {
            case 'grudzien':
            case 'styczen':
            case 'luty':
                alert(name + ' jezdzi na sankach.');
                break;
            case 'marzec':
            case 'kwiecien':
            case 'maj':
                alert(name + ' chodzi po kaluzach.');
                break;
            case 'czerwiec':
            case 'lipiec':
            case 'sierpien':
                alert(name + ' sie opala.');
                break;
            case 'wrzesien':
            case 'pazdziernik':
            case 'listopad':
                alert(name + ' zbiera liscie.');
                break;
            default:
                alert(name + ' uczy się JS.');
                break;
        }
    } else {
        alert('Nie podałeś imienia!');
    }
}
var imie = prompt('Podaj imię :');
var miesiac = prompt('Podaj miesiąc :');
checkMonth(imie,miesiac);