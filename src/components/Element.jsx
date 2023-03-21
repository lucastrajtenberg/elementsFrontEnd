import React from 'react'
import "../assets/element.css"
import {deleteElement} from "../utils/handleElement"

export default function Element({element}) {
  return (
    <li className='element'>
        <p>{element.name}</p>
        <button onClick={() => deleteElement(element._id)}>borrar</button>        
    </li>
  )
}
