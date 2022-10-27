import React from "react";
import '../CSS/factionButton.css'

const FilterButton = ({factionName, setFactionFilter, factionFilter}) => {

    let buttonClassOn = `button-${factionName}`;
    let buttonClassOff = 'button-Off';
    
    const toggleFactionFilter = () => {
        let toggledFaction = {};
        toggledFaction[factionName] = !factionFilter[factionName];
        setFactionFilter(factionFilter => ({...factionFilter, ...toggledFaction}))
    }
    

    return (
        <button 
            type="button" 
            onClick={toggleFactionFilter}
            className={`algomancy-cards-button ${factionFilter[factionName] ? buttonClassOn : buttonClassOff}`}
        >{factionName}</button>
    )
}

export default FilterButton;