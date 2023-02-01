function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback();
  }, 2000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Hablemos...");
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios, " + nombre);
    otroCallback();
  }, 1000);
}

//--

console.log("Iniciando proceso...");
// hola('Rafael', function (nombre) {
//     adios('RafaelB', function() {
//         console.log("Termina el proceso")
//     });
// })

function conversacion (nombre, veces, callback) {
    if (veces > 0) {
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    } else {
        callback(nombre)
    }
}

hola('RafaB', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('terminando el procesillo');
    })
})


// hola("Rafa", function () {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios("Maria", function () {
//           console.log("terminando proceso...");
//         });
//       });
//     });
//   });
// });
