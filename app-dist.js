'use strict';

/*
document.getElementById('app').innerHTML = '<p id="title">Arriba React, abajo los aburridos de angular</p>';/


const parrafo = document.createElement('p');
const spanTexto = document.createElement('span');
parrafo.setAttribute('id', 'title');
parrafo.textContent = 'Angular';
spanTexto.textContent = ' es lo mejor';

parrafo.appendChild(spanTexto);
document.getElementById('app').appendChild(parrafo);


// REACT
// Tipo de elemento , atributo , hijos
const elemento = React.createElement('p', { id: 'title' }, 'Angular ', React.createElement('span', null, 'es lo mejor' ));// null indica que el parametro no existe


// Metodo render( elemento , donde va )
ReactDOM.render(elemento, document.getElementById('app'))


// JSX
// definir las class de html como className, dado que class está reservada para componentes en React
const elemento = 
(<p id="title" className="title">React {'javascript'.toUpperCase()} 
  <span> es lo mejor</span>
</p>)
ReactDOM.render(elemento, document.getElementById('app'));
*/

// los componentes deben comenzar con mayúsculas
// un parámetro puede ir suelto
// const Saludar = props => <p>Hola {props.nombre}</p> 
// dos propiedades o más, se utilizan paréntesis y llaves
var Saludar = function Saludar(_ref) {
  var nombre = _ref.nombre,
      apellido = _ref.apellido;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Hola ',
      nombre
    ),
    React.createElement(
      'p',
      null,
      'Apellido: ',
      apellido
    )
  );
};

ReactDOM.render(React.createElement(Saludar, { nombre: 'Ely', apellido: 'Vega' }), document.getElementById('app'));