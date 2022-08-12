// Custom Hooks

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    // Desde aquí --> Lo hemos hecho con un Custom Hook
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [])
    // Hasta aquí --> Lo hemos hecho con un Custom Hook

    /* useEffect( () => {
        getGifs(category)
            .then( newImages => setImages(newImages));
    }, []) */ //Esto es válido, pero lo hemos hecho con un async await

    return {
        images, //images: images,
        isLoading //isLoading: isLoading
    }
}


