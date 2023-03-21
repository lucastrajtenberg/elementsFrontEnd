import axios from "axios";

const elementsURL = "http://localhost:3000/elements";

const addElement = (payload) => {
  axios.post(`${elementsURL}/new`, payload).then((res) => {
    getElements();
  });
};
const getElements = async () => {
  const data = await axios.get(elementsURL)
  return data
};
const deleteElement = (id) => {
  axios.delete(`${elementsURL}/delete/${id}`).then((res) => {
    getElements();
  });
};

export {addElement, getElements, deleteElement};
