import React from "react";
import { Link } from "react-router-dom";

const Other = () => {
  return (
    <div style={{ background: "lightblue" }}>
      This is the Other page
      <div>
        <Link to="/main">Main</Link>
      </div>
    </div>
  );
};

export default Other;
