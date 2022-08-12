import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );
  
    return (
        <>
            <h3>{category}</h3>

        {/* Mensaje LoadingMessage --> Custom Components sería: <LoadingMessage isLoading={ isLoading } /> */}

            {
                isLoading && ( <h2>Cargando...</h2> )

                /* isLoading ? (<h2>Cargando...</h2> : null) */ //Si isLoading es true, muestra h2, si no, null
            }

            <div className="card-grid">
                {
                    images.map( (image) => ( //Desestructuración del image
                        <GifItem 
                            key={ image.id }
                            /* title={ title }
                            url={ url } */
                            { ...image } //Mejor opción cuando hay muchas props. Mirar en Components
                        />
                    ))
                }
            </div>
        </>
    )
}