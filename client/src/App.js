import React from "react";
import Landing from "./pages/Landing.jsx";
import styled from "styled-components/macro";

const Button = styled.button`
  background: red;
  color: #fff;
  font-size: 1rem;
`;

const ButtonSecond = styled.button`
  background: blue;
  color: #fff;
  font-size: 1rem;
`;

function App() {
  return (
    <div>
      <Landing />
    </div>
  );
}

export default App;
