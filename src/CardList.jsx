import Card from './Card'
const CardList = (props) => {

    const handleShowButton = (i) => {
        const modified = [...props.savedCards]
        modified[i].expanded = !modified[i].expanded
        props.onCardSave(modified)
      }
    
    const handleDeleteButton = (i) => {
        const modified =[...props.savedCards]
        modified.splice(i, 1)
        props.onCardSave(modified)
        localStorage.setItem("savedCards", JSON.stringify(modified))
        }
    return(
        <div className="card-list">
        {
          props.savedCards.map( (x, i) => (
            <Card
                card = {x}
                onDelete = {() => {handleDeleteButton(i)}}
                onShow = {() => {handleShowButton(i)}}
            />
          ))
        }
      </div>
    )
}
export default CardList