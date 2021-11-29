
import React from 'react';
import { useState } from 'react/cjs/react.development';
import { AddCategoria } from './components/AddCategoria';


export const GifExpertApp = () => {

    const [categorias, setcategorias] = useState(['One Punch', 'Gragon Ball', 'Naruto']);

    // const handleAdd = () => {
    //     ///setcategorias(['HunterXHunter', ...categorias]);
    //     setcategorias(cats => {return [...cats, 'HunterXHunter']});
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria/>
            <hr />
            <ol>
                {
                    categorias.map(categoria => {
                        return <li key={categoria}>{categoria}</li>
                        //return <li>Hola</li>
                    })
                }
            </ol>
        </>
    )
}
