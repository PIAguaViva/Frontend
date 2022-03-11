import React from 'react'
import Carousel from 'react-elastic-carousel'           // Não esqueça de instalar a Dependencia

import './CarouselComponent.css'

function CarouselComponent() {
    var items = [
        { img: "https://i.imgur.com/auBX3vV.png"},
        { img: "https://i.imgur.com/QYYxiEA.png" },
        { img: "https://i.imgur.com/JfMEHEa.png" },
        { img: "https://i.imgur.com/X5DArGS.png" },
        { img: "https://i.imgur.com/wkOS2GW.png" },
        { img: "https://i.imgur.com/zigmBiI.png"},
        { img: "https://i.imgur.com/9rVPfLU.png"}
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