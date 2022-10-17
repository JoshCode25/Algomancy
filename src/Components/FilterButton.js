import {React, useEffect} from "react";
import '../CSS/factionButton.css'

const FilterButton = ({factionName, setFactionFilter, factionFilter}) => {

    let buttonClassOn = `button-${factionName}`;
    let buttonClassOff = 'button-Off';
    
    const toggleFactionFilter = () => {
        let toggledFactionFilter = factionFilter;
        toggledFactionFilter[factionName] = !toggledFactionFilter[factionName];
        setFactionFilter(toggledFactionFilter)
        console.log(factionFilter[factionName]);
    }
    

    return (
        <button 
            type="button" 
            onClick={toggleFactionFilter}
            className={factionFilter[factionName] ? buttonClassOn : buttonClassOff}
        >{factionName}</button>
    )
}

export default FilterButton;