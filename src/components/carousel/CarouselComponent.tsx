import React from 'react'
import Carousel from 'react-elastic-carousel'           // Não esqueça de instalar a Dependencia

import './CarouselComponent.css'

function CarouselComponent() {
    var items = [
        {img: "https://i.imgur.com/X7TDfMB.png"},
        { img: "https://i.imgur.com/SjpWyzr.png" },
        { img: "https://i.imgur.com/yRTACsa.png?1" },
        { img: "https://i.imgur.com/fAryJf2.png?1" },
        { img: "https://i.imgur.com/aKlc2uw.png?3" },
        { img: "https://i.imgur.com/ubqwjxe.png?2"}
        // { img: { arcane } } // 
    ]

    return (
        <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={6000}>
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