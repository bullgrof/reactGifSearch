
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    //en un functional componente no se debe poner ejecucion de funciones que no sean necesarias se puede sacar por fuera el functional Component
    
    const { images, isLoading } = useFetchGifs( category );  //custom hook desestructuro un obejto
    
    return (
        <>
            <h3>{category}</h3>
            
            {
                isLoading && (<h2 >Cargando...</h2>) //AND LOGICO 
            }
            
            <div className="card-grid">
                {
                    images.map((image) =>(
                        <GifItem 
                            key={image.id}
                            { ...image }     //se esparcen las propiedades para enviarlas al siguiente componente
                        />
                    ))
                }                
            </div>   
        </>
  )
}
