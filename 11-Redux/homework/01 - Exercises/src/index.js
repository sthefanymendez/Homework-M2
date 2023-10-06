const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store =createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const count = store.getState().contador
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = count
}

// Ejecutamos la función 'renderContador':
renderContador()

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador)

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
let botonIncremento = document.getElementById("incremento");
let botonDecremento = document.getElementById("decremento");
let botonIncrementoImpar = document.getElementById("incrementoImpar");
let botonIncrementoAsync = document.getElementById("incrementoAsync");


// hagan un dispatch al store de la acción correspondiente:
botonIncremento.addEventListener("click", ()=>{
  store.dispatch(incremento());
});
botonDecremento.addEventListener("click", ()=>{
  store.dispatch(decremento());
});
botonIncrementoImpar.addEventListener("click", ()=>{
  const count = store.getState().contador
  count % 2 !== 0 && store.dispatch(incrementoImpar());
});
botonIncrementoAsync.addEventListener("click", ()=>{
  setTimeout(() =>{
    store.dispatch(incrementoAsync());
  }, 1000);
});

