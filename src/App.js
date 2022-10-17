import './App.css';
import React, {useState, useEffect} from 'react';
import SearchArea from './Containers/SearchArea';
import DisplayArea from './Containers/DisplayArea';
import compiledData from './json/compiledData.json';
import factionList from './Assets/factionList';

function App() {
  const [displayCardNames, setDisplayCardNames] = useState([]);
  const [allCardNames, setAllCardNames] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [factionFilter, setFactionFilter] = useState({});

  useEffect(() => { //set state default values onMount
    //set default array with all the card names
    let arrayedNames = [];
    for (let data in compiledData) {
      if(arrayedNames.length < 200) { //potential limiter to test less cards
        let cardName = data
        
        arrayedNames.push(cardName);
      } else {
        console.log(arrayedNames);
        break;
      }
    }
    
    setAllCardNames(arrayedNames);

    //set faction filter to default as true
    let defaultFactionFilter = {};
    factionList.forEach((faction) => {
      let factionName = faction[0];
      defaultFactionFilter[`${factionName}`] = true;
    })

    setFactionFilter(defaultFactionFilter);
  },[])

  useEffect(() => {
    let displayedFactions = [];
    for (let faction in factionFilter) {
      if(factionFilter[faction]) {
        displayedFactions.push(faction);
      }
    }
    console.log(displayedFactions);

    const filteredCardNames = allCardNames.filter(cardName =>{
      let testBoolean = false;
      let cardInfo = compiledData[cardName][0];
      let cardText = cardInfo.text;
      let cardType = cardInfo.type;
      let cardFactions = cardInfo.factions;
      let filteredFactions = []
      for (let faction in factionFilter) {
        if (factionFilter[faction]) {
          filteredFactions.push(faction);
        }
      }

      let containsName = cardName.toLowerCase().includes(searchField.toLowerCase());
      let containsText = cardText.toLowerCase().includes(searchField.toLowerCase());
      let containsType = cardType.toLowerCase().includes(searchField.toLowerCase());
      let factionTrue = filteredFactions.some(faction => cardFactions.includes(faction));

      if((containsName || containsText || containsType) && factionTrue) {
        testBoolean = true;
      }

      return testBoolean;
    })

    setDisplayCardNames(filteredCardNames);

  }, [searchField, factionFilter])

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
    console.log(searchField);
  }

  return (
    <div className="App">
      <SearchArea 
        factionList={factionList} setFactionFilter={setFactionFilter} factionFilter={factionFilter} onSearchChange={onSearchChange}
      />
      <DisplayArea displayCardNames={displayCardNames} compiledData={compiledData}/>
    </div>
  );
}

export default App;
