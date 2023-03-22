import React from 'react'
import "../assets/element.css"
import { useElementsContext } from '../context/ElementsContext'

export default function Element({element, index, showModal, setShowModal}) {

  const {deleteElement} = useElementsContext()

  return (
    <li className='element'>
        <p>{index + 1}</p>
        <p className='element_abbreviation'>{element.abbreviation}</p>
        <p>{element.name}</p>
        <p>{element.mass}</p>
        <button onClick={() => deleteElement(element._id)}>borrar</button>
        <button onClick={() => setShowModal({open:true, action: 'edit', elementId:element._id})}>editar</button>
    </li>
  )
}
