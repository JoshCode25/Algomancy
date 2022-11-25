import React from "react";
import FilterButton from "../Components/FilterButton.js";
import '../CSS/searchArea.css'

const SearchArea = ({factionList, onSearchChange, factionFilter, setFactionFilter, isRegex}) => {

    return (
        <div>
            <input
                type='search'
                placeholder='Search Algomancy Cards'
                onChange={onSearchChange}
            />
            {isRegex ? <p id="modifierMessage">Regex Search: modifiers must be in alphabetical order</p>: null}
            <div id="algomancyButtonWrapper">
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