import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ({ saludo, subtitulo, mensaje }) => {


    return (
        <>
            {/* <pre>{ JSON.stringify (persona, null, 3)}</pre> */}
            <h1>{saludo}</h1>
            <h2> {subtitulo} </h2>
            <p>Mi primer Aplicación</p>
            <p>{ mensaje}</p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    mensaje: 'Conociendo las defaultProps de React',
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
