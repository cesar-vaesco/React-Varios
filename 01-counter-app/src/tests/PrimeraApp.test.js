import '@testing-library/jest-dom';

// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PrimeraApp from '../PrimeraApp';

import { shallow } from 'enzyme';

describe('Pruebas en PrimeraApp', () => {

    // test('Debe de mostrar el mensaje: Hola, Soy Goku', () => {
    //     const saludo = 'Hola, Soy Goku';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Debe de mostrer <PrimeraApp/> correctamente', () => {

        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect( wrapper).toMatchSnapshot();
    });
});
