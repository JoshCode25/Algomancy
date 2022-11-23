import './App.css';
import React, {useState, useEffect} from 'react';
import SearchArea from './Containers/SearchArea';
import DisplayArea from './Containers/DisplayArea';
import factionList from './Assets/factionList';

function App() {
  const [compiledData, setCompiledData] = useState({});
  const [allCardNames, setAllCardNames] = useState([]);
  const [displayCardNames, setDisplayCardNames] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [factionFilter, setFactionFilter] = useState({});
  const [invalidRegex, setInvalidRegex] = useState(false);

  useEffect(() => {
    async function fetchCardData() {
      let cardData = await (await fetch('https://calebgannon.com/wp-content/uploads/algomancy-extras/AlgomancyCards.json')).json();
      setCompiledData(cardData);
    }

    fetchCardData();
  },[] )

  useEffect(() => { //set state default values onMount
    //set default array with all the card names
    let arrayedNames = [];
    for (let data in compiledData) {
        let cardName = data
        
      arrayedNames.push(cardName);
      if(cardName === 'Bonk'){
        console.log(compiledData[cardName]);
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
  },[compiledData])

  useEffect(() => {
    let displayedFactions = [];
    for (let faction in factionFilter) {
      if(factionFilter[faction]) {
        displayedFactions.push(faction);
      }
    }
    let searchFieldWords = searchField.split(' ');

    let regexCheck = /(^\/).*(\/).*/g;
    let isRegex = regexCheck.test(searchField);
    let isValidRegex = false;
    let containsModifiers, splitSearch, searchRegex, modifiers, regex;
    if(isRegex) {
      containsModifiers = searchField.at(-1) === '/'? false : true;
      //remove empty spaces caused by / removal
      splitSearch = searchField.split('/').filter(item => item !== '');

        if (!containsModifiers) {
          searchRegex = splitSearch.join('/');
        } else if (containsModifiers) {
          //if there are modifiers, pop them out and remove non-modifier characters
          modifiers = splitSearch.pop().replace(/[^igm]/g,'');
          searchRegex = splitSearch.join('/');
        }

        isValidRegex = (/.*(\\\/)$/.test(searchRegex) && searchRegex.length > 0);
        console.log(searchRegex, /(\\\/)$/.test(searchRegex), searchRegex.length)
        if(isValidRegex) regex = new RegExp(searchRegex, modifiers);
    }
    
    const filteredCardNames = allCardNames.filter(cardName =>{
      let includeCard = false;
      let containsSearch = false;
      let cardInfo = compiledData[cardName][0];
      let cardText = cardInfo.text;
      let cardType = cardInfo.type;
      let compiledString = cardName.concat(' ', cardText, ' ', cardType);
      let cardFactions = cardInfo.factions;
      let filteredFactions = []
      for (let faction in factionFilter) {
        if (factionFilter[faction]) {
          filteredFactions.push(faction);
        }
      }

      let factionTrue = filteredFactions.some(faction => cardFactions.includes(faction));

      if(!isValidRegex) {
        for(let i = 0; i < searchFieldWords.length; i++) {
          let doesContain = compiledString.toLowerCase().includes(searchFieldWords[i]);
          if (!doesContain) break;
          if (i === searchFieldWords.length -1) containsSearch = true;
        }

        // let searchFieldRegex = searchFieldWords.map(word => {
        //   //finds and replaces all non-word characters with an \ before
        //   let nonWordCharacters = word.match(/[^a-zA-z0-9_\s]/g)
        //   if (nonWordCharacters !== null) {
        //     nonWordCharacters.map(char => `\\${char}`);
        //   }
        //   //need to add escaped non-word characters in to replace originals

        //   `(?=.*${word})`}).join('');
        // //Need to add '\' before all non-word characters to prevent RegExp crashes
        // let regexExp = new RegExp(searchFieldRegex,'gi');
        // containsSearch = regexExp.test(compiledString);
        // console.log(compiledString, searchFieldWords,searchFieldRegex, containsSearch)
      } else if (isValidRegex) {
 
        containsSearch = regex.test(compiledString);
        // console.log(cardName, regex, containsSearch);
      }
      let containsName = cardName.toLowerCase().includes(searchField.toLowerCase());
      let containsText = cardText.toLowerCase().includes(searchField.toLowerCase());
      let containsType = cardType.toLowerCase().includes(searchField.toLowerCase());

      if(containsSearch && factionTrue) {
        includeCard = true;
      }

      return includeCard;
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
