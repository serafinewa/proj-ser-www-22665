var text = "";

function printNumbers(nr){
    for(var i=1;nr>=i;i++){
        text = text + i.toString();
    }
    alert(text);
}

printNumbers(12);