//Custom hook

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {  //Un hook es una funcion que retorna algo
   
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages( category );
    }, []);    //sirve para ejecutar efectos secundarios cuadno algo cambie

   
    return {
        images,
        isLoading
    }
}
