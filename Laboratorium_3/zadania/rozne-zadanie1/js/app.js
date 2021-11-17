var text = prompt("Podaj swoje zdanie :")

function countWord(text){
    return text.trim().split(/\s+/).length;
}
switch(true) {
    case (countWord(text)>1):
        alert('Podane zdanie składa się z ' + countWord(text) + ' wyrazów.');
        break;
    case (countWord(text)===1):
        alert('To tylko jeden wyraz');
        break;
    default:
        alert('Pusto!');
        break;
}