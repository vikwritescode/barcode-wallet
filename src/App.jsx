import { useEffect, useState } from 'react';
import Barcode from 'react-barcode';
import './App.css';

function App() {
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

  const handleAddButton = () => {
    //TODO: add input error
    if (inputNick !== "" && inputCode !== "") {
      const newCode = {nick: inputNick, code: inputCode, expanded: false}
      setInputNick("")
      setInputCode("")
      setSavedCards([...savedCards, newCode])
      console.log(JSON.stringify(savedCards))
      localStorage.setItem("savedCards", JSON.stringify([...savedCards, newCode]))
    }
  }

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
    <div className="h-screen dark:bg-gray-900 dark:text-white">
      <h1 className="text-6xl font-extrabold text-left font-sans py-10 md:text-center">Your Codes</h1>
      <div>
        <div className="grid p-5 gap-4 md:justify-around">
          <div className = "text-left">
            <label className="font-bold">Nickname </label>
            <br />
            <input className = "w-full h-8 rounded border border-gray-400 dark:border-0 dark:bg-gray-800"value={inputNick} onChange={(x) => {setInputNick(x.target.value)}}></input>
          </div>
          <div className="text-left">
            <label className="font-bold">Code</label>
            <br />
            <input className = "w-full h-8 rounded border border-gray-400 dark:border-0 dark:bg-gray-800"value={inputCode} onChange={(x) => {setInputCode(x.target.value)}}></input>
          </div>
          
          <button className="bg-green-400 hover:bg-green-500 dark:bg-green-200 dark:hover:bg-green-300 rounded py-3 px-3 text-gray-800 text-center font-semibold"onClick={handleAddButton}>ADD</button>
        </div>
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
    </div>
  )
}

export default App
