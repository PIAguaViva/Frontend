import React from 'react'
import Carousel from 'react-elastic-carousel'           // Não esqueça de instalar a Dependencia

import './CarouselComponent.css'

function CarouselComponent() {
    var items = [
        { img: "https://i.imgur.com/bIhTBKQ.png" },
        { img: "https://i.imgur.com/TIf8Rdk.png" },
        { img: "https://i.imgur.com/eqUASVe.png" },
        { img: "https://i.imgur.com/un7FAp7.png" },
        { img: "https://i.imgur.com/r1hKlAa.png"}
        // { img: { arcane } } // 
    ]

    return (
        <Carousel isRTL={false}>
            {
                items.map(item => (
                    <>
                        <img src={item.img} alt="Item" className='imagens' />
                    </>
                ))
            }
        </Carousel>
    )
}

export default CarouselComponent;