import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ background: "lightgreen" }}>
      This is the Main page
      <div>
        <Link to="/other">Other</Link>
      </div>
    </div>
  );
};

export default Main;
