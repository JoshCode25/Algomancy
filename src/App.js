import './App.css';
import React, {useState, useEffect} from 'react';
import SearchArea from './Containers/SearchArea';
import DisplayArea from './Containers/DisplayArea';
import compiledData from './json/compiledData.json';

function App() {
  const [displayCards, setDisplayCards] = useState([]);
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    let arrayedData = []

    for (let data in compiledData) {
      if(arrayedData.length < 4) { //dont cycle through all 187 for testing
        let cardObject = {}
        let dataName = data
        cardObject[`${dataName}`] = compiledData[`${dataName}`][0];

        arrayedData.push(cardObject);
      } else {
        console.log(arrayedData);
        break;
      }
    }

    setAllCards(arrayedData);
    console.log(allCards);
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
      <DisplayArea displayCards={allCards}/>
    </div>
  );
}

export default App;
