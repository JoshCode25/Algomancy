import React from "react";
import FilterButton from "../Components/FilterButton.js";
import '../CSS/searchArea.css'

const SearchArea = ({factionList, onSearchChange, factionFilter, setFactionFilter, isRegex, totalDisplayed, factionEquals, setFactionEquals}) => {

    let factionToggleButtonDisplay = factionEquals? 'Equals' : 'Includes';

    const toggleFactionEquals = () => {
        setFactionEquals(!factionEquals);
    }

    return (
        <div id="algomancySearchWrapper">
            <input id="algomancySearchInput"
                type='search'
                placeholder='Search Cards (Regex or Text)'
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
            <div className="flex-wrapper">
                <p className='total-display'>{`Total Results: ${totalDisplayed}`}</p>
                <button 
                    id="factionEqualToggleButton" 
                    type="button"
                    onClick={toggleFactionEquals}
                >Faction Filter Setting: {factionToggleButtonDisplay}</button>
            </div>
        </div>
    )
}

export default SearchArea;