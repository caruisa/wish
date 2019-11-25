import React from "react";
import { Link } from "react-router-dom";

function abc() {
  return (
    <>
      <h1>Link to</h1>
      <p>Thank you</p>
      <Link to="/ReactPlayground"><button>React.js 놀이터</button></Link>
    </>
  );
}

export default abc;