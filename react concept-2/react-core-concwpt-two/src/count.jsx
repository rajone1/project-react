import { useState } from "react";
import App from "./App";

export default function Count1() {
  const [count, setcount] = useState(1);

  const incrise = () => {
    const newadd = count + 1;
    setcount(newadd);
  };

  const discrise = () => {
    setcount(count - 1);
  };

  return (
    <div className="addcss">
      <h3 style={{ color: "red" }}>counter:{count} </h3>

      <div style={{ border: "2px solid black" }}>
        <button onClick={incrise}>increase num</button>
        <button onClick={discrise}>discrease num</button>
      </div>
    </div>
  );
}
