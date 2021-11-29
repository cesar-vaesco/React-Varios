import React,{useState} from 'react'

export const AddCategoria = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo');
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const handleSumit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
    }

    return (
        <>
            <form onSubmit={handleSumit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}
