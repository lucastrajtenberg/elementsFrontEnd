import React, {createContext, useContext, useState, useEffect} from 'react';
import axios from "axios"

const elementsURL = "http://localhost:3000/elements";
const ElementsContext = createContext();

const ElementsProvider = ({ children }) => {
  const [elements, setElements] = useState([]);

  const addElement = (payload) => {
    axios.post(`${elementsURL}/new`, payload).then((res) => {
      getElements();
    });
  };

  const updateElement = (payload) => {
    const {_id} = payload
    const payloadData = {
      name: payload.name,
      description: payload.description,
      atomicNumber: payload.atomicNumber,
      mass: payload.mass,
      abbreviation: payload.abbreviation
    }
    axios.put(`${elementsURL}/update/${_id}`, payloadData).then((res) => {
      getElements();
    });
  }

  const deleteElement = (id) => {
    axios.delete(`${elementsURL}/delete/${id}`).then((res) => {
      getElements();
    });
  };

  const getElements = async () => {
    const res = await axios.get(elementsURL)
    setElements(res.data)
  };

  useEffect(() => {
    getElements()
  }, []);

  return (
    <ElementsContext.Provider value={{ elements, addElement, deleteElement, getElements, updateElement}}>
      {children}
    </ElementsContext.Provider>
  );
};
const useElementsContext = () => useContext(ElementsContext)
export {useElementsContext, ElementsProvider};