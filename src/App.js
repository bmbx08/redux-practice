import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[count,setCount]=useState(0);

  const increase=()=>{
    setCount(count+1);
  }

  useEffect(()=>{

  },[])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Click me!</button>
    </div>
  );
}

export default App;