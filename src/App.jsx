import axios from "axios"
import Button from "./components/Button"

function App() {

  const addElement = () => {
    const payload = {
      manu: "Chiquito y contento"
    }
    const url = 'http://localhost:3000/elements/new'
    axios.post(url, payload).then((res) => {
      console.log(res.data)
    })
  }

  return (
    <div className="App">
      <h1>soy yo</h1>
      <Button handleAction={addElement}/>
    </div>
  )
}

export default App
