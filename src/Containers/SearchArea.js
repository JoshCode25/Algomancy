import React from "react";
import FilterButton from "../Components/FilterButton.js";

const SearchArea = ({factionList, onSearchChange, factionFilter, setFactionFilter}) => {

    return (
        <div>
            <div>Search Area</div>
            <input
                type='search'
                placeholder='search Cards'
                onChange={onSearchChange}
            />
            <div>
                {factionList.map((faction, index) => {
                    return(
                        <FilterButton
                            key={`${faction[0]}${index}`}
                            factionName={faction[0]}
                            setFactionFilter={setFactionFilter}
                            factionFilter={factionFilter}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SearchArea;