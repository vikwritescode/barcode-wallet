import { useState } from 'react';
import './App.css';

const AddPanel = (props) => {
    const [inputNick, setInputNick] = useState("")
    const [inputCode, setInputCode] = useState("")
    const [inputType, setInputType] = useState("CODE128")
    const handleAddButton = () => {
        //TODO: add input error
      if (inputNick !== "" && inputCode !== "") {
        const newCode = {nick: inputNick, code: inputCode, type: inputType, expanded: false}
        setInputNick("")
        setInputCode("")
        props.onCardSave([...props.savedCards, newCode])
        localStorage.setItem("savedCards", JSON.stringify([...props.savedCards, newCode]))
        console.log(props.savedCards)
      }
    }
    const handleDropdownChange = (e) => {
      setInputType(e.target.value)
    }
  
    const codeOptions = [
      {
        value: "CODE128",
        display: "Code 128"
      },
      {
        value: "CODE39",
        display: "Code 39"
      },
      {
        value: "EAN13",
        display: "EAN13"
      },
      {
        value: "QR",
        display: "QR"
      }
    ]

    return (
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
        <label className="font-bold">Barcode Type</label>
        <select onChange={handleDropdownChange} className="w-full h-8 rounded border border-gray-400 dark:border-0 dark:bg-gray-800">
          {codeOptions.map(x => (<option value={x.value}>{x.display}</option>))}
        </select>
        <button className="bg-green-400 hover:bg-green-500 dark:bg-green-200 dark:hover:bg-green-300 rounded py-3 px-3 text-gray-800 text-center font-semibold"onClick={handleAddButton}>ADD</button>
      </div>
    )
}

export default AddPanel