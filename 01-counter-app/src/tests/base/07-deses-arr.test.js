import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en Desestrucutración', () => {


    // export const retornaArreglo = () => {
    //     return ['ABC', 123];
    // }
    test('Debe de retornar un string y un número', () => {
        // 1.- Inicialización
        const arreglo = ['ABC', 123];

        //  2.- estimulo
        const arregloTest = retornaArreglo();

        // 3.- Observar el comportamiento
        expect(arregloTest).toEqual(arreglo);
    });

    test('Retornar un string y un número', () => {

        const arregloTest = retornaArreglo();
        expect(arregloTest).toEqual(['ABC', 123]);

    });

    test('Desestructurando arreglo para identificar retorno de string y número', () => {
        // 1.- Inicialización
        const [letras, numeros] = retornaArreglo();

        // 3.- Observar el comportamiento
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
});
