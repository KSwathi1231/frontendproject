import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  // initial name value should be a single argument
  const [name, setName] = useState('VCE');

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const handle = () => {
    setName('MERN');
  };

  // useEffect should be called, not reassigned
  
  return(
    <div>
      {name}<br/>
      {count}
      <br/>
  <button onClick={handle} className="border">Change</button>
  <br />
  <br />
  <button onClick={increment} className="border">Change count</button>
  <button onClick={increment} className="border">Change count</button>
    </div>
  )


}
export default App
