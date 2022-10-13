import './App.css';
import React, {useState} from 'react';
import SearchArea from './Containers/SearchArea';
import DisplayArea from './Containers/DisplayArea';

function App() {

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
      <DisplayArea/>
    </div>
  );
}

export default App;
