// creare lista di nomi per accesso
// chiedi il nome all utente
// se il nome risulta in lista -> accedi
// altrimenti -> accesso negato
//
var listaAccessi = ['Luca', 'Mario', 'Giovanni', 'Andrea', 'Marta'];
console.log(listaAccessi);
var nome = prompt('Come ti chiami?');

for (var i = 0; i < listaAccessi.length; i++) {
    // console.log(listaAccessi[i]);
    if (listaAccessi[i] == nome) {
        var nomeInLista = true;
    }
}

if (nomeInLista == true) {
    console.log('Può entrare');
} else {
    console.log('Non può entrare');
}


// ----------------esercizio dadi----------------------


var player1 = Math.random() * 10;
var tiroUno = player1.toFixed(0);
console.log(tiroUno);

var player2 = Math.random() * 10;
var tiroDue = player2.toFixed(0);
console.log(tiroDue);

if (tiroUno > tiroDue) {
    console.log('Player 1 ha vinto');
} else if
    (tiroUno < tiroDue) {
        console.log('Player 2 ha vinto');
} else
    console.log('Pareggio');
