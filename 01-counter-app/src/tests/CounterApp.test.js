
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp/>', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);

    })

    test('Debe mostrar <CounterApp/> correctamente', () => {


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

    test('Debe de incrementar en +1', () => {
        //const wrapper = shallow(<CounterApp />);
        //const btn1 = wrapper.find('button').at(0);
        // console.log(btn1.html());
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('Debe de decrementar en -1', () => {
        //const wrapper = shallow(<CounterApp />);
        //const btn1 = wrapper.find('button').at(0);
        // console.log(btn1.html());
        // wrapper.find('button').at(2).simulate('click');
        // const counterText = wrapper.find('h2').text().trim();
        // expect(counterText).toBe('9');
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });
});
