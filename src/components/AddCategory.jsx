import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        
       // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );  //Envio el valor de la nueva categoria limpio con el trim
        setInputValue(''); //limpia la caja de texto mandando un string vacio
    }


    return (
        <form onSubmit={( event ) => onSubmit(event)}>
            <input
                type="text" 
                placeholder="Buscar Gifs" 
                value={ inputValue } 
                onChange={ onInputChange } 
            />
        </form>
    )
}