import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe de retornar hola César!', () => {
        // 1.- Inicialización
        const nombre = 'César';
        //  2.- estimulo
        const saludo = getSaludo(nombre);
        console.log(saludo);

        // 3.- Observar el comportamiento
        expect(saludo).toBe('Hola ' + nombre +'!');
    })

    //getSaludo debe de retornar Hola Veronica! si no hay argumento en el nombre
    test('getSaludo debe de retornar Hola Veronica! si no hay argumento en el nombre', () => {
    // 1.- Inicialización
    const nombre = 'Veronica';
    //  2.- estimulo
    const saludo = getSaludo();
    console.log(nombre);

    // 3.- Observar el comportamiento
    expect(saludo).toBe('Hola ' + nombre +'!');
    })
});
