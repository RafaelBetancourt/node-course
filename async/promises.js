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