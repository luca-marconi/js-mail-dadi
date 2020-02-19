// creare lista di nomi per accesso
// chiedi il nome all utente
// se il nome risulta in lista -> accedi
// altrimenti -> accesso negato

var listaAccessi = ['Luca', 'Mario', 'Giovanni', 'Andrea', 'Marta'];
console.log(listaAccessi);
var nome = prompt('Come ti chiami?');

for (var i = 0; i < listaAccessi.length; i++) {
    if (listaAccessi[i] == nome) {
        console.log('puoi entrare');
    } else {
        console.log('non puoi entrare');
    }
}
