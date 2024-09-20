function soyAsincrona(nombre, callback) {
    setTimeout(function () {
        console.log('Hola, '+ nombre);
        callback();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000)
}

console.log('Iniciando proceso ....');
hola('Daniel', function () {
    adios('Daniel', function() {
console.log('Terminando proceso ....');
});
});