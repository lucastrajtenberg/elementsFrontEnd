import React from "react";
import "../assets/modal.css";
import {addElement} from "../utils/handleElement"

export default function Modal({ showModal, setShowModal }) {

  const handleSubmit = (e) => {
    e.preventDefault() //evita que cuando haces submit se recargue la pag
    const formData = new window.FormData(e.target) //estudiar esta mierda despues. bicho de javaScript
    const fields = Object.fromEntries(formData)
    addElement(fields)
  }  
 
  return (
    <div className="modal">
        <button
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        X
      </button>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formDiv">
          <label>Ingrese el nombre</label>
          <input placeholder="Nombre" name="name" />
        </div>
        <div className="formDiv">
          <label>Ingrese la descripcion</label>
          <input placeholder="Descripción" name="description" />
        </div>
        <div className="formDiv">
          <label>Ingrese el número atómico</label>
          <input placeholder="Número atómico" name="atomicNumber" />
        </div>
        <div className="formDiv">
          <label>Ingrese la masa</label>
          <input placeholder="Masa" name="mass"/>
        </div>
        <div className="formDiv">
          <label>Ingrese una abreviación</label>
          <input placeholder="Abreviación" name="abbreviation"/>
        </div>
        <button type="submit"
      >
        submit
      </button>
      </form>
    </div>
  );
}
