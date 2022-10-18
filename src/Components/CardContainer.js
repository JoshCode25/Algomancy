import React from "react";

const CardContainer = ({cardInfo}) => {
    const cardName = (cardInfo) ? cardInfo[0].name : 'default';
    const toggleInfo = (cardName) => (console.log(cardName));

    return (
        <div onClick={() => {toggleInfo(cardName)}} className='cardContainer'>
            <img 
                src={`${process.env.PUBLIC_URL}/Artwork/${cardName}.jpg`} 
                alt={`${cardName}`}
                width={'300'}
                height={'417'}
            />
        </div>
    )
}

export default CardContainer;