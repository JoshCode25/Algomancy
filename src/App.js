import './App.css';
import React, {useState, useEffect} from 'react';
import SearchArea from './Containers/SearchArea';
import DisplayArea from './Containers/DisplayArea';
import compiledData from './json/compiledData.json';

function App() {
  const [displayCards, setDisplayCards] = useState([]);

  useEffect(() => {
    console.log(compiledData.Bonk);
    setDisplayCards(compiledData.Bonk);
    console.log(displayCards);
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
      <DisplayArea displayCards={displayCards}/>
    </div>
  );
}

export default App;
