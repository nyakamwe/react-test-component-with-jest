import React, {useState} from "react";
import "./index.css";

function CustomerList() {
  const [names, setName]= useState([])
  const [inputValue, setInputValue]= useState('')

  const handleInputCange =(event)=>{
    setInputValue(event.target.value)
  }

  const handleSubmit =()=>{
    setName((prev)=> [...prev, inputValue])
    setInputValue('')
  }

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" data-testid="app-input" value={inputValue} onChange={handleInputCange}/>
        <button type="submit"  className="ml-30" data-testid="submit-button" onClick={handleSubmit}>Add Customer</button>
      </section>

      <ul className="styled mt-50" data-testid="customer-list">
        
        {names.map((name, index)=>{
          <li className="slide-up-fade-in" data-testid="list-item1" key="list-item1" >{name}</li>
        })}
          </ul>
    </div>
  );
}

export default CustomerList