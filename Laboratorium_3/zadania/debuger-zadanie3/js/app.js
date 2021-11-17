let sum = 0;
// wystarczy dodać warunek, ze jezlei zaplata jest stringiem to konwertujemy go jako inta
users.forEach(user => {
    if(typeof user.payment === 'string'){
        user.payment = parseInt(user.payment);
    }else{
        sum += user.payment;
    }
})

console.log(`Zarobki wszystkich użytkowników: ${sum}`);