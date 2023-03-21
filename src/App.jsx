import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Element from "./components/Element";
import Modal from "./components/Modal"
import {addElement, getElements, deleteElement} from "./utils/handleElement"
import "./assets/app.css";

function App() {
  const [elements, setElements] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getElementsData = async () => {
    const response = await getElements();
    console.log(response)
    setElements(response.data);
  }

  useEffect(() => {
    getElementsData()
  }, []);
  return (
    <div className="app">
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}/>
      )}
      <h1>soy yo</h1>
      <div className="container">
        <ul className="list">
          {elements.map((element) => {
            return <Element element={element} key={element.id} />;
          })}
        </ul>
        <Button
          handleAction={addElement}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
}

export default App;
