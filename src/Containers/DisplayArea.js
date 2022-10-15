import React from "react";
import CardContainer from "../Components/CardContainer";

const DisplayArea = ({displayNames, compiledData}) => {

    return (
        <div>
            <p>Display Area</p>
            {(displayNames.length < 1) ? "" : 
                displayNames.map((displayName, i) => {
                    return(
                        <CardContainer
                            key={`${displayName}`}
                            cardInfo={compiledData[`${displayName}`]}
                        />
                    )
                })
            }
        </div>

    )
}

export default DisplayArea;