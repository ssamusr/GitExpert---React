//Functional Components
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {

        //Opción larga para newCategory repetida
        /* if (categories.includes(newCategory) || categories.includes(newCategory.charAt(0).toUpperCase() + newCategory.slice(1))) return; */

        //Otra opción newCategory repetida

        /* if (!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return; */

        //Otra opción newCategory repetida

        if (!categories.some(category => 
            category.toLowerCase() === newCategory.toLowerCase()))
        
        //categories.push('Valorant') --> Evitamos el push ya que muta el array. React evita mutar los array. Tenemos que crear un nuevo array

        //Otra forma de hacerlo
        setCategories([newCategory, ...categories]);

        //Opción que sustituya el new Category por el que se parece

        //Mediante un callback
        //setCategories( cat => [...cat, 'Valorant']);
    }

    //Fragmento solo se utiliza en el nodo root
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory = {value => onAddCategory(value)}
            />
            
                { 
                    categories.map( (category) => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
        </>
    )
}