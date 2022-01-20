import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const {count} = useSelector(state => state.counterReducer)
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        {/* {JSON.stringify(store)}         */}
        count: {count} 
      </div>
    </div>
  );
}

export default Dashboard;
