import { useEffect, useState } from "react";
import Showbottle from "../show/showbottle";
import "./bottleall.css";
const Bottleall = () => {
  const [bottle, setbottle] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    fetch("bottole.json")
      .then((res) => res.json())
      .then((data) => setbottle(data));
  }, []);
  // console.log(bottle);

  // add event
  const addcart = (show) => {
    // console.log(show);
    const newadd = [...cart, show];
    setcart(newadd);
  };

  return (
    <div>
      <h2>bottle:- {bottle.length}</h2>
      <h3>add bottole:-{cart.length}</h3>
      <div className="bottleall">
        {bottle.map((bottle) => (
          <Showbottle
            key={bottle.id}
            bottle={bottle}
            addcart={addcart}
          ></Showbottle>
        ))}
      </div>
    </div>
  );
};

export default Bottleall;
