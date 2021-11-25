import '@testing-library/jest-dom';

import heroes from '../../data/heroes';
import { getHeroeByIdAsync } from '../../base/09-promesas';

describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync debe de retornar un Héroe async', ( done ) => {
        // 1.- Inicialización
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe( heroes[0]);
                done();
            })
        //  2.- estimulo
        // 3.- Observar el comportamiento
    });

    test('debe de obtener un error si el héroe por id no existe', (done) => {
    // 1.- Inicialización
    const id = 10;
    //  2.- estimulo
        getHeroeByIdAsync(id)
            .catch(error => {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    // 3.- Observar el comportamiento
    });
});
