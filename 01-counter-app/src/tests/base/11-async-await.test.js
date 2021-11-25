
import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await y fetch', () => {

    test('Debe de retornar el url de la imagen', async () => {
        // 1.- Inicialización
        const url = await getImagen();

        console.log('url: ' + url);

        // 3.- Observar el comportamiento
        expect(typeof url).toBe('string');
    });

    test('La url debe de incluir https', async () => {
        // 1.- Inicialización
        const url = await getImagen();
        //  2.- estimulo
        // 3.- Observar el comportamiento
        expect(url.includes('https://')).toBe(true);
    });

});
