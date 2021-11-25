import '@testing-library/jest-dom';

import React from 'react';

import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en PrimeraApp', () => {

    test('Debe de mostrar el mensaje: Hola, Soy Goku', () => {
        // 1.- Inicialización
        const saludo = 'Hola, Soy Goku';

        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();
    });
});
