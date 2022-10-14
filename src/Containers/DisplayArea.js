import React from "react";
import CardContainer from "../Components/CardContainer";

const DisplayArea = ({displayCards}) => {

    return (
        <div>
            <p>Display Area</p>
            <CardContainer cardInfo={displayCards[0]}/>
        </div>

    )
}

export default DisplayArea;