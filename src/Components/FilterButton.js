import React from "react";

const FilterButton = ({factionName, setFactionFilter}) => {

    return (
        <button type="button" onclick={() => {setFactionFilter(factionName)}}>{factionName}</button>
    )
}

export default FilterButton;