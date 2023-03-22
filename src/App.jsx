import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Element from "./components/Element";
import Modal from "./components/Modal";
import "./assets/app.css";
import { useElementsContext } from "./context/ElementsContext";

function App() {
  const { elements, addElement } = useElementsContext();
  const [showModal, setShowModal] = useState({open:false, action:''});

  console.log(elements);

  return (
    <div className="app">
      {showModal.open && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <h1>soy yo</h1>
      <div className="container">
        <ul className="list">
          {elements.map((element, index) => {
            return <Element element={element} key={element._id} index={index} showModal={showModal} setShowModal={setShowModal}/>;
          })}
        </ul>
        <Button
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
}

export default App;
