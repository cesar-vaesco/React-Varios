import React from 'react';

// Este componente recibe un prop desestructurado con un valor por default
const PrimeraApp = ({ saludo = "Hola Mundo" }) => {


    return (
        <>
            {/* <pre>{ JSON.stringify (persona, null, 3)}</pre> */}
            <h1>{saludo}</h1>
            <p>Mi primer Aplicación</p>
        </>
    );

}


export default PrimeraApp;
