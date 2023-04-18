import React, { useState } from "react"
import Modal from './Modal'
import './Modal.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  // return (
  //   <div className="App">
  //     {
  //       currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
  //     }
  //   </div>
  // );

  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <button onClick= {() => setShow(true) }>Show Modal</button>
      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>This is a modal body</p>
      </Modal>
    </div>
  );
}

export default App;
