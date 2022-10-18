import React from "react";
import CardContainer from "../Components/CardContainer";
import '../CSS/displayArea.css'

const DisplayArea = ({displayCardNames, compiledData}) => {

    return (
        <div>
            <p className='totalDisplay'>{`Total Results: ${displayCardNames.length}`}</p>
            <div className="scroll">
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
        </div>

    )
}

export default DisplayArea;