import React from "react";

const CardContainer = ({cardInfo}) => {
    const cardName = (cardInfo) ? cardInfo.name : 'default';
    const toggleInfo = (cardName) => (alert(cardName));

    return (
        <div onClick={() => {toggleInfo(cardName)}}>
            <img 
                src={`${process.env.PUBLIC_URL}/Artwork/${cardName}.jpg`} 
                alt={`${cardName}`}
                width={'240'}
                height={'333'}
            />
        </div>
    )
}

export default CardContainer;