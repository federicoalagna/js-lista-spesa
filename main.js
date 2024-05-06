'use strict'

const listaDellaSpesa = [ 'pasta', 'carne', 'pesce', 'riso', 'farina'];

const ul = document.querySelector('ul.lista');

let i = 0;

while (i < listaDellaSpesa.length) {
    document.write (listaDellaSpesa[i] ) ;
    i++;}