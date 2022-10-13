import React from "react";
import FilterButton from "../Components/FilterButton.js";

const SearchArea = ({factionList}) => {

    const setFactionFilter = (faction) => {
        alert(`This is the ${faction} faction`)
    }

    return (
        <div>
            <div>Search Area</div>
            <div>
                {factionList.map((faction, index) => {
                    return(
                        <FilterButton
                            key={`${faction[0]}${index}`}
                            factionName={faction[0]}
                            setFactionFilter={setFactionFilter}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SearchArea;