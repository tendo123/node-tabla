const { crearArchivo } = require('./helpers/mutiplicar');
const yargs = require('./config/yargs');
const colors = require('colors');

console.clear();
//console.log(yargs);

//const base = 9;

crearArchivo(yargs.b, yargs.l)
    .then(nombreArchivo => console.log(nombreArchivo, "creado".green))
    .catch(err => console.log(err));