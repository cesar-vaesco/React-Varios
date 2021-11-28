
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp/>', () => {

    test('Debe mostrar <CounterApp/> correctamente', () => {

        const wrapper = shallow(<CounterApp />);
        // 3.- Observar el comportamiento
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        // 1.- Inicialización
        const value = 100;
        //  2.- estimulo
        const wrapper = shallow(<CounterApp value={value} />);
        const counterText = wrapper.find('h2').text().trim();
        // 3.- Observar el comportamiento
        expect(counterText).toBe('100');

        //expect(wrapper.find('h2').text().trim()).toBe('100');
    });
});
