import './App.css';
import React, {useState, useEffect} from 'react';
import SearchArea from './Containers/SearchArea';
import DisplayArea from './Containers/DisplayArea';
import compiledData from './json/compiledData.json';

function App() {
  const [displayCards, setDisplayCards] = useState([]);
  const [allCardNames, setAllCardNames] = useState([]);

  useEffect(() => {
    let arrayedNames = []

    for (let data in compiledData) {
      if(arrayedNames.length < 4) { //dont cycle through all 187 for testing
        let cardName = data

        arrayedNames.push(cardName);
      } else {
        console.log(arrayedNames);
        break;
      }
    }

    setAllCardNames(arrayedNames);
  },[])

  useEffect(() => {

    setDisplayCards(compiledData.Bonk);

  }, [displayCards])

  const factionList = [
    ['earth', 'e'],
    ['wood', 'g'],
    ['fire', 'r'],
    ['water', 'b'],
    ['metal', 'm']  
  ]


  return (
    <div className="App">
      <SearchArea factionList={factionList}/>
      <DisplayArea displayNames={allCardNames} compiledData={compiledData}/>
    </div>
  );
}

export default App;
