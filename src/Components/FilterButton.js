import React from "react";
import factionList from "../Assets/factionList";

const FilterButton = ({factionName, setFactionFilter, factionFilter}) => {

    let factionIndex = factionList.findIndex(faction => faction[0] === factionName);
    

    const toggleFactionFilter = () => {
        let toggledFactionFilter = factionFilter;
        toggledFactionFilter[factionName] = !toggledFactionFilter[factionName];
        setFactionFilter(toggledFactionFilter)
        console.log(toggledFactionFilter);
    }

    const style = {
        color: 'white',
        backgroundColor: 'blue'
    }

    return (
        <button 
            type="button" 
            onClick={toggleFactionFilter}
            style={style}
        >{factionName}</button>
    )
}

export default FilterButton;