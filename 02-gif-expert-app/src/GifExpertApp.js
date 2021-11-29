
import React from 'react';
import { useState } from 'react/cjs/react.development';


export const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Gragon Ball', 'Naruto'];

    const [categorias, setcategorias] = useState(['One Punch', 'Gragon Ball', 'Naruto']);

    const handleAdd = () => {

        ///setcategorias(['HunterXHunter', ...categorias]);
        setcategorias(cats => {
            return [...cats, 'HunterXHunter']
        });


    }


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
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
