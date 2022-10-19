import React from "react";
import '../CSS/cardContainer.css'

const CardContainer = ({cardInfo}) => {
    const cardName = (cardInfo) ? cardInfo[0].name : 'default';
    const toggleInfo = (cardName) => (console.log(cardName));

    return (
        <div onClick={() => {toggleInfo(cardName)}} className='cardContainer'>
            <img 
                className='cardImg'
                loading="lazy"
                src={`${process.env.PUBLIC_URL}/Artwork/${cardName}.jpg`} 
                alt={`${cardName}`}
            />
        </div>
    )
}

export default CardContainer;