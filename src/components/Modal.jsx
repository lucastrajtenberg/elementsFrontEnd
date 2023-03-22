import React from "react";
import "../assets/modal.css";
import { useElementsContext } from "../context/ElementsContext";

export default function Modal({ showModal, setShowModal }) {

  const {addElement, updateElement} = useElementsContext()

  const handleSubmit = (e) => {
    e.preventDefault() //evita que cuando haces submit se recargue la pag
    const formData = new window.FormData(e.target) //estudiar esta mierda despues. bicho de javaScript
    const fields = Object.fromEntries(formData)
    // if (typeof fields.mass === 'string') return alert('El campo de masa debe ser númerico')
    // if (typeof fields.atomicNumber === 'string') return alert('El campo de número atómico debe ser númerico')
    fields._id = showModal.elementId
    fields.atomicNumber = Number(fields.atomicNumber)
    fields.mass = Number(fields.mass)
    if (showModal.action === 'create') addElement(fields)
    else if (showModal.action === 'edit') updateElement(fields)
    setShowModal({open:!showModal, action: ''})
  }  
 
  return (
    <div className="modal">
        <button className="xButton"
        onClick={() => {
          setShowModal({open: false, action:''});
        }}
      >
        X
      </button>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formDiv">
          <label>Ingrese el nombre</label>
          <input placeholder="Nombre" name="name" type="text" />
        </div>
        <div className="formDiv">
          <label>Ingrese la descripcion</label>
          <input placeholder="Descripción" name="description" type="text"/>
        </div>
        <div className="formDiv">
          <label>Ingrese el número atómico</label>
          <input placeholder="Número atómico" name="atomicNumber" type="number"/>
        </div>
        <div className="formDiv">
          <label>Ingrese la masa</label>
          <input placeholder="Masa" name="mass" type="number"/>
        </div>
        <div className="formDiv">
          <label>Ingrese una abreviación</label>
          <input placeholder="Abreviación" name="abbreviation" type="text"/>
        </div>
        <button className='submitButton' type="submit"
      >
        submit
      </button>
      </form>
    </div>
  );
}
