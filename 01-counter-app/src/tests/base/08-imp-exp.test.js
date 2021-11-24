import '@testing-library/jest-dom';

import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

describe('Pruebas en funciones de Heroes', () => {


    //export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

    test('Debe de retornar un héroe por Id', () => {

        // 1.- Inicialización
        const id = 1;
        const heroe = getHeroeById(id);

        //  2.- estimulo
        const heroesData = heroes.find(h => h.id === id);
        //console.log(heroesData);
        // 3.- Observar el comportamiento
        expect(heroe).toEqual(heroesData);
    });

    test('Debe de retornar undefined si heroe no existe', () => {

        // 1.- Inicialización
        const id = 10;
        const heroe = getHeroeById(id);

        //console.log('Heroe: ' + heroe);

        //  2.- estimulo

        // 3.- Observar el comportamiento
        expect(heroe).toBe(undefined);
    });

    //export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );
    test('Debe de retornar los heroes de DC', () => {
        // 1.- Inicialización
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        //  2.- estimulo
        const heroesData = heroes.filter(h => h.owner === owner);

        // 3.- Observar el comportamiento
        expect(heroes).toEqual(heroesData);
    });

    test('Debe de retornar los heroes de Marvel', () => {
        // 1.- Inicialización
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        //  2.- estimulo

        // 3.- Observar el comportamiento
        expect(heroes.length).toBe(2);
    })

    //Debe de retornar los heroes de Marvel
    // length = 2
    //toBe

});
