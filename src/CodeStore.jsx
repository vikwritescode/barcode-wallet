import { useEffect, useState } from 'react';
import Barcode from 'react-barcode';
import AddPanel from './AddPanel';
import './App.css';

function CodeStore() {
  const [count, setCount] = useState(0)
  const [savedCards, setSavedCards] = useState([]);

  const [inputNick, setInputNick] = useState("")
  const [inputCode, setInputCode] = useState("")

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
  const handleShowButton = (i) => {
    const modified = [...savedCards]
    modified[i].expanded = !modified[i].expanded
    setSavedCards(modified)
  }

    const handleDeleteButton = (i) => {
        const modified =[...savedCards]
        modified.splice(i, 1)
        setSavedCards(modified)
        localStorage.setItem("savedCards", JSON.stringify(modified))
    }


  return (
      <div>
        <AddPanel 
        savedCards = {savedCards}
        inputNick = {inputNick}
        inputCode = {inputCode}
        onNickChange = {setInputNick}
        onCodeChange = {setInputCode}
        onCardSave = {setSavedCards}
        />

        <div className="card-list">
          {
            savedCards.map( (x, i) => (
              // seleted item : normal item
              <center className={(x.expanded) ? "rounded-xl bg-zinc-200 dark:bg-slate-800 grid gap-5 justify-items-center" : "grid gap-5 justify-items-center"}>
                <h3 className="text-3xl">{x.nick}</h3>
                <button className="w-24 bg-green-400 hover:bg-green-500 dark:bg-green-200 dark:hover:bg-green-300 rounded py-3 px-3 text-gray-800 text-center font-semibold" onClick={ () => handleShowButton(i)}>{(x.expanded) ? "HIDE" : "SHOW"}</button>
                <br />
                {(x.expanded) ? (
                  <div>
                    <Barcode value={x.code}/>
                    <br />
                    <button className = "bg-red-300 hover:bg-red-400 dark:bg-red-200 dark:hover:bg-red-300 rounded py-3 px-3 text-gray-800 text-center font-semibold" onClick={ () => handleDeleteButton(i)}>DELETE 🔥</button>
                  </div>
                ) : (<></>)}
              </center>
            ))
          }
        </div>
      </div>
  )
}

export default CodeStore
