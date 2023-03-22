import "../assets/button.css"


export default function Button({showModal, setShowModal}) {
  return (
    <button className="button" onClick={() => {setShowModal({open:true, action: 'create'})}}>+</button>
    
  )
}
