import Barcode from "react-barcode"
const Card = (props) => {

    return (
        <center className={(props.card.expanded) ? "rounded-xl bg-zinc-200 dark:bg-slate-800 grid gap-5 justify-items-center" : "grid gap-5 justify-items-center"}>
        <h3 className="text-3xl">{props.card.nick}</h3>
        <button className="w-24 bg-green-400 hover:bg-green-500 dark:bg-green-200 dark:hover:bg-green-300 rounded py-3 px-3 text-gray-800 text-center font-semibold" onClick={ () => props.onShow()}>{(props.card.expanded) ? "HIDE" : "SHOW"}</button>
        <br />
        {(props.card.expanded) ? (
          <div>
            <Barcode value={props.card.code}/>
            <br />
            <button className = "bg-red-300 hover:bg-red-400 dark:bg-red-200 dark:hover:bg-red-300 rounded py-3 px-3 text-gray-800 text-center font-semibold" onClick={ () => props.onDelete()}>DELETE 🔥</button>
          </div>
        ) : (<></>)}
      </center>  
    )
}

export default Card