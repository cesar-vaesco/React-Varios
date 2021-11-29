
import React from 'react';
import { useState } from 'react/cjs/react.development';
import { AddCategorie } from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     ///setcategorias(['HunterXHunter', ...categorias]);
    //     setcategorias(cats => {return [...cats, 'HunterXHunter']});
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategorie setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(categorie => {
                        return <li key={categorie}>{categorie}</li>
                        //return <li>Hola</li>
                    })
                }
            </ol>
        </>
    )
}
