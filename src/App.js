import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {

  let count = useSelector((state)=>state.count); //useSelector는 함수를 매개변수로 받음, 함수는 state를 매개변수로 받음.
  let id = useSelector((state)=>state.id);
  let password = useSelector((state)=>state.password);
  let decCount=useSelector((state)=>state.decCount);
  const dispatch = useDispatch();

  const increase=()=>{
    dispatch({type:"INCREMENT", payload: {num:5} }) //action은 객체다(type과 payload라는 키가 필요,type만 필수).
  }

  const login = ()=>{
    dispatch({type:"LOGIN",payload:{id:"Kevin",password:"123"}})
  }

  const decrease=(event)=>{
    console.log(event.target.value);
    if(event.key==="Enter"){
      dispatch({type:"REDUCTION", payload:{decAmount:event.target.value}});
    }
    
  }

  return (
    <div>
      <h1>Increase with redux</h1>
      <h3>{count}</h3>
      <button onClick={increase}>Click me!</button>
      <Box/>

      

      <h1>{id}{password}</h1>
      <button onClick={login}>Login</button>

      <h1>Decrease with redux</h1>
      <h3>{decCount}</h3>
      <input type="number" placeholder="Decrease by this much.." onKeyDown={(event)=>decrease(event)}/>

    </div>
  );
}

export default App;
