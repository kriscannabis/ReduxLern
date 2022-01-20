import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const {count} = useSelector(state => state.counterReducer);
  
  return (
    <div>
      <h2>Home</h2>
      count: {count}
    </div>
  );
}

export default Home;