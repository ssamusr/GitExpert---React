import {useState} from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    /* const onInputChange = (event) => {
        setInputValue(event.target.value);
    } */

    /* const onInputChange = ({target}) => {
        setInputValue(target.value);
    } */

    //Se puede desestructurar más

    const onInputChange = ({target: {value}}) => {
        setInputValue(value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //setCategories( categories => [ inputValue, ...categories]);

        onNewCategory(inputValue.trim());
        //Limpiar el input
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }> {/* (event) => onSubmit(event) */}
            <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            //onChange={ (event) => onInputChange(event)} Mismo argumento que le mandamos y queremos ejecutar
            onChange={ onInputChange }
            autoFocus
            >

        </input>

        </form>
    )
}
