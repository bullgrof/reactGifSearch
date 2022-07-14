import { useState } from "react";
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);
    const onAddCategory = ( newCategory ) => {
       
        if (categories.includes(newCategory)) return; //includes valida si ya existe dentro del arreglo de categorias y si existe no deja agregarlo si no existe permite agregarlo al arreglo

        setCategories([newCategory, ...categories])// agregar elementos a un arregalo
        //setCategories( cat => [...cat, 'valorant'] )
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                //setCategories={ setCategories } 
                onNewCategory={(value) => onAddCategory(value)}  //on esta emitiendo algo sea un valor o un evento
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

            {/* gifItem */}
        </>
    )
}


//mcW717O5ixEbekadzuiSjIhBYm5whdmo