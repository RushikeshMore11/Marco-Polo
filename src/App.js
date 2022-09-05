import React, { useState } from 'react';
import "./App.css"
const App = () => {

  const [name,setName] = useState("Marco");
  const [btn ,setBtn] = useState("Polo");
const HandleChange = () =>{
  setName(btn);
  setBtn(name)
}

  return (
    <>
    <div className="container">
      <div className="main">
      <h1 id="marco-polo" >{name}</h1>
      <button id="marco-polo-toggler" onClick={HandleChange}  >{btn}</button>
      </div>
    </div>
    </>
  )
}

export default App;