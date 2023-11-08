import React, { useState } from "react";
import "./styles.css";

function Parent() {
  const [children, setChildren] = useState([8, 9, 2]);
  function removeChild(removedId) {
    setChildren(children.filter((id) => id !== removedId));
  }
  return (
    <div>
      <h2> Parent </h2>
      {children.map((id) => (
        <Child id={id} key={id} remove={() => removeChild(id)} />
      ))}
    </div>
  );
}

function Child({ remove, id }) {
  return (
    <div>
      <button onClick={remove}> child {id}. Kaldırmak için tıklayın!</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}
