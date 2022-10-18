import React from "react";
import FilterButton from "../Components/FilterButton.js";
import '../CSS/searchArea.css'

const SearchArea = ({factionList, onSearchChange, factionFilter, setFactionFilter}) => {

    return (
        <div>
            <p>Search Names, Text, and Types</p>
            <input
                type='search'
                placeholder='Search Algomancy Cards'
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