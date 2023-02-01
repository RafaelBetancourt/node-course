function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback();
  }, 2000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios, " + nombre);
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso...");
hola("Rafa", function () {
  adios("Maria", function () {
    console.log("terminando proceso...");
  });
});

