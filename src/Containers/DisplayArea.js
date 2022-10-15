import React from "react";
import CardContainer from "../Components/CardContainer";

const DisplayArea = ({displayCardNames, compiledData}) => {

    return (
        <div>
            <p>Display Area</p>
            {(displayCardNames.length < 1) ? "" : 
                displayCardNames.map((displayCardName, i) => {
                    return(
                        <CardContainer
                            key={`${displayCardName}`}
                            cardInfo={compiledData[`${displayCardName}`]}
                        />
                    )
                })
            }
        </div>

    )
}

export default DisplayArea;