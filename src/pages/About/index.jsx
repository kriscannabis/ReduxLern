import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const About = () => {
  const {count} = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()
  const setCountHandler=()=>{
    dispatch({ type: 'setCount', payload:count+1 })
  }
  const resetCounter=()=>{
    dispatch({ type: 'setNull' })    
  }

  return (
    <div>
      <h2>About</h2>
      count: {count}
      <button onClick={setCountHandler}>setCount</button>
      <button onClick={resetCounter} >Reset </button>
    </div>
  );
}

export default About;
