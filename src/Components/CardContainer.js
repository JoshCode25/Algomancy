import React from "react";
import '../CSS/cardContainer.css'

const CardContainer = ({cardInfo}) => {
    const cardName = (cardInfo) ? cardInfo[0].name : 'default';
    const cardNameDash = cardName.replace(/[.,/#!$%^&*;:{}=_`'~()]/g,"").split(" ").join("-");
    const toggleInfo = (cardInfo) => (console.log(cardInfo));

    return (
        <div onClick={() => {toggleInfo(cardInfo)}} className='cardContainer'>
            <img 
                className='cardImg'
                src={`https://calebgannon.com/wp-content/uploads/cardsearch-images/${cardNameDash}.jpg`} 
                alt={`${cardName}`}
            />
        </div>
    )
}

export default CardContainer;