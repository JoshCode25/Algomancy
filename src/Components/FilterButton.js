import React from "react";

const FilterButton = ({factionName, setFactionFilter}) => {

    return (
        <button type="button" onClick={() => {setFactionFilter(factionName)}}>{factionName}</button>
    )
}

export default FilterButton;