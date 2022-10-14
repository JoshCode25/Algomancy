import React from "react";

const CardContainer = ({cardInfo}) => {
    const cardName = (cardInfo) ? cardInfo.name : 'default';
    const toggleInfo = (cardName) => (alert(cardName));

    return (
        <div onClick={() => {toggleInfo(cardName)}}>
            <img src={`./Artwork/${cardName}.jpg`} alt={`${cardName}`}/>
        </div>
    )
}

export default CardContainer;