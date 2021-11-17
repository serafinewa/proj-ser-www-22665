function generateRandom(min, max){
    var bigger = 0;
    var ciag = "";
    for(var i=0;i<10;i++){
        var liczba = Math.floor(Math.random()*(max-min+1)+min);
        ciag = ciag + " " + liczba.toString();
        if(liczba>10){
            bigger++;
        }
    }
    if(bigger>=5){
        alert('Udało się\n'+ ciag)
    }else{
        alert('Nie udało się\n' + ciag)
    }
}
generateRandom(1, 20);