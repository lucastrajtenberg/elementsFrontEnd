import "../assets/button.css"


export default function Button({handleAction, showModal, setShowModal}) {
  return (
    <button className="button" onClick={() => {setShowModal(!showModal); handleAction()}}>+</button>
    
  )
}
