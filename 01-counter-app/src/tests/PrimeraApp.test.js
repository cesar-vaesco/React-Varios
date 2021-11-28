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

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        // 1.- Inicialización
        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Soy un subtitulo';
        //  2.- estimulo
        const wrapper = shallow(<PrimeraApp
            saludo={saludo}
            subtitulo={subTitulo}
        />
        );
        //const textoParrafo = wrapper.find('p').text();
        const textoParrafo = wrapper.find('h2').text().trim();
        console.log(textoParrafo);
        // 3.- Observar el comportamiento
        expect(textoParrafo).toBe(subTitulo);
    });
});
