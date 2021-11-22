import React from 'react';


const PrimeraApp = () => {

    const saludo = 'Hola Mundo';
    // const saludo = 123;
    // const saludo = 133.5;
    // const saludo = true;
    const persona = {
        nombre: 'Cesar',
        edad:41
    };

    return (
        <>
            <pre>{ JSON.stringify (persona, null, 3)}</pre>
            <h1>{ saludo }</h1>
            <p>Mi primer Aplicación</p>
        </>
    );

}


export default PrimeraApp;

//1.- Se crea el componente, se exporta por default y se importa react
