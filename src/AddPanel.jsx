import './App.css';

const AddPanel = (props) => {
    const handleAddButton = () => {
        //TODO: add input error
        if (props.inputNick !== "" && props.inputCode !== "") {
          const newCode = {nick: props.inputNick, code: props.inputCode, expanded: false}
          props.onNickChange("")
          props.onCodeChange("")
          props.onCardSave([...props.savedCards, newCode])
          console.log(JSON.stringify(props.savedCards))
          localStorage.setItem("savedCards", JSON.stringify([...props.savedCards, newCode]))
        }
      }
    


    return (
        <div className="grid p-5 gap-4 md:justify-around">
        <div className = "text-left">
          <label className="font-bold">Nickname </label>
          <br />
          <input className = "w-full h-8 rounded border border-gray-400 dark:border-0 dark:bg-gray-800"value={props.inputNick} onChange={(x) => {props.onNickChange(x.target.value)}}></input>
        </div>
        <div className="text-left">
          <label className="font-bold">Code</label>
          <br />
          <input className = "w-full h-8 rounded border border-gray-400 dark:border-0 dark:bg-gray-800"value={props.inputCode} onChange={(x) => {props.onCodeChange(x.target.value)}}></input>
        </div>
        
        <button className="bg-green-400 hover:bg-green-500 dark:bg-green-200 dark:hover:bg-green-300 rounded py-3 px-3 text-gray-800 text-center font-semibold"onClick={handleAddButton}>ADD</button>
      </div>
    )
}

export default AddPanel