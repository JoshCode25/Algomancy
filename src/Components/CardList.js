import React from "react";

const CardList = ({cardInfo}) => {
    const currentInfo = cardInfo[0];
    const {name: cardName, type: cardType, power: cardPower, toughness: cardToughness, 
        text: cardText, cost: cardCost, total_cost: cardTotalCost, factions: cardFactions, details: cardDetails} = currentInfo;

}

export default CardList;