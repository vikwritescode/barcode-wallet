import { useEffect, useState } from 'react';

import AddPanel from './AddPanel';
import './App.css';
import CardList from './CardList';

function CodeStore() {
  const [count, setCount] = useState(0)
  const [savedCards, setSavedCards] = useState([]);

  useEffect(
    () => {
      if (!localStorage.getItem("savedCards")) {
        console.log("first time setup!")
        localStorage.setItem("savedCards", JSON.stringify([]))
      } else {
        console.log("pulling from database!")
        setSavedCards(JSON.parse(localStorage.getItem("savedCards")))
      }
    }, []
  )

  return (
      <div>
        <AddPanel 
            savedCards = {savedCards}
            onCardSave = {setSavedCards}
        />

        <CardList
            savedCards = {savedCards}
            onCardSave = {setSavedCards}
        />
      </div>
  )
}

export default CodeStore
