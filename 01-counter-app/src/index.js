import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import  './index.css';




const divRoot = document.querySelector('#app');

//render(información que se quiere mostrar, elmento donde se quiere poner)
ReactDOM.render(<PrimeraApp /> , divRoot);


//Se importa la clase del componente para que sea renderizado por react
