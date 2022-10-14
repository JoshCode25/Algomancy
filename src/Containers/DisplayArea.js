import React from "react";
import CardContainer from "../Components/CardContainer";

const DisplayArea = ({displayCards}) => {
    console.log(displayCards);

    return (
        <div>
            <p>Display Area</p>
            {(displayCards.length < 1) ? "" : 
                displayCards.map((card, i) => {
                    console.log(Object.values(card)[0]);
                    // return(
                    //     <CardContainer
                    //         key={`${card[0].name}`}
                    //         cardInfo={card[0]}
                    //     />
                    // )
                })
            }
        </div>

    )
}

export default DisplayArea;