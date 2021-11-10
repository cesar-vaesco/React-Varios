import React from "react";
import ReactDOM from 'react-dom';


const saludo = <h1>Hola Mundo</h1>;



const divRoot = document.querySelector('#app');

//render(información que se quiere mostrar, elmento donde se quiere poner)
ReactDOM.render(saludo, divRoot);
