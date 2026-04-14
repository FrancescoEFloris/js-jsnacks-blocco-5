const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

/*
names.forEach(function(nome) {
  console.log(nome);
});
*/

const nomiConsole = names.map(function (nome) {
    return nome;
});

console.log(nomiConsole);
