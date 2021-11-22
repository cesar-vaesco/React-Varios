import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ({ saludo }) => {

    // if( !saludo){
    //     throw new Error('El saludo es necesario');
    // }
    return (
        <>
            {/* <pre>{ JSON.stringify (persona, null, 3)}</pre> */}
            <h1>{saludo}</h1>
            <p>Mi primer Aplicación</p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;
