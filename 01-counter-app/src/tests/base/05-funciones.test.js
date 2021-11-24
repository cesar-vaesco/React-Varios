import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo, saludar2, saludar4 } from '../../base/05-funciones';
describe('Pruebas en archivo 05-funciones.js', () => {

    test('Debe de retornar Hola César', () => {
        // 1.- Inicialización
        const nombre = 'César';
        //  2.- estimulo
        const saludo = saludar2(nombre);
        // 3.- Observar el comportamiento
        expect(saludo).toBe('Hola César');
    });

    test('Debe de retornar Hola Mundo', () => {
        // 1.- Inicialización
        const hola = saludar4();
        //  2.- estimulo
        // 3.- Observar el comportamiento
        expect(hola).toBe('Hola Mundo');
    })

    test('getUser: debe de retornar un objeto', () => {
        // 1.- Inicialización
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        //  2.- estimulo
        const user = getUser();
        // 3.- Observar el comportamiento
        expect(user).toEqual(userTest);
    });

    test('getUsuarioActivo: debe devolver un usuario activo', () => {
        // 1.- Inicialización
        const nombre = 'César';
        const userTestActivo = {
            uid: 'ABC567',
            username: nombre
        }
        //  2.- estimulo
        const usuarioActivo = getUsuarioActivo(nombre);
        // 3.- Observar el comportamiento
        expect(usuarioActivo).toEqual(userTestActivo);
    })
});
