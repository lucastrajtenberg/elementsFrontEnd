import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Element from "./components/Element";
import "./assets/app.css";

const elementsURL = "http://localhost:3000/elements";

function App() {
  const [elements, setElements] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const addElement = () => {
    const payload = {
      name: "Manu",
      description: "Pituso",
      atomicNumber: 1,
      mass: 1,
      abbreviation: "Man",
    };
    axios.post(`${elementsURL}/new`, payload).then((res) => {
      getElements();
    });
  };

  const getElements = () => {
    axios.get(elementsURL).then((res) => {
      setElements(res.data);
    });
  };

  const deleteElement = (id) => {
    console.log("deleteElemnt");
    axios.delete(`${elementsURL}/delete/${id}`).then((res) => {
      getElements();
    });
  };

  useEffect(() => {
    getElements();
  }, []);
  useEffect(() => {
    console.log("hola", elements);
  }, [elements]);
  return (
    <div className="app">
      {showModal && <div className="modal" onClick={() => {setShowModal(!showModal)}}></div>}
      <h1>soy yo</h1>
      <div className="container">
      <ul className="list">
        {elements.map((element) => {
          return <Element element={element} deleteElement={deleteElement} />;
        })}
      </ul>
      <Button handleAction={addElement} showModal={showModal} setShowModal={setShowModal}/>
      </div>
    </div>
  );
}

export default App;
