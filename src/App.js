import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Result';
const secretNum=Math.floor(Math.random()*10)+1;
function App() {
  const [term,SetTerm]=useState("");
function handleChange(e){
  SetTerm(e.target.value);
  console.log(term);
}
  return (
    <div className="container">
      <div className="head">
          <label htmlFor='term'>
            Guess The Number Between 1 to 10
            </label>
      </div>
      <input type="number" id='term' name='term' onChange={handleChange}/>
      <Result secretNum={secretNum} term={term}/>
    </div>
  );
}

export default App;
