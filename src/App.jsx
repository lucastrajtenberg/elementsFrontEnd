import axios from "axios"
import { useEffect, useState } from "react"
import Button from "./components/Button"

const elementsURL = "http://localhost:3000/elements"

function App() {
  
  const [elements, setElements] = useState([])

  const addElement = () => {
    const payload = {
      name: "Manu",
    description: "Pituso",
    atomicNumber: 1,
    mass: 1,
    abbreviation: "Man"
    }
    axios.post(`${elementsURL}/new`, payload).then((res) => {
      getElements()
    })
  }

  const getElements = () => {
    axios.get(elementsURL).then((res) => {
      setElements(res.data)
    })
  }

  const deleteElement = (id) => {
    console.log('deleteElemnt')
    axios.delete(`${elementsURL}/delete/${id}`).then((res) => {
      getElements()
    })
  }

  useEffect(() => {
    getElements()
  }, [])
  useEffect(() => {
    console.log('hola', elements)
  }, [elements])
  return (
    <div className="App">
      <h1>soy yo</h1>
      <ul>{elements.map((element) => {
        return (
          <li>
            <p>{element.name}</p>
            <button onClick={() => deleteElement(element._id)}>borrar</button>
            </li>
        )
      })}</ul>
      <Button handleAction={addElement}/>
    </div>
  )
}

export default App
