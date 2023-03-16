import React from 'react'
import "../assets/element.css"

export default function Element({element, deleteElement}) {
  return (
    <li className='element'>
        <p>{element.name}</p>
        <button onClick={() => deleteElement(element._id)}>borrar</button>        
    </li>
  )
}
