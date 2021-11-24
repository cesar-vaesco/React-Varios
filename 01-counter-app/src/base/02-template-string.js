


const nombre   = 'César!';
const apellido = 'Vargas';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


export function getSaludo(nombre = 'Veronica') {
    return 'Hola ' + nombre +'!';
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
