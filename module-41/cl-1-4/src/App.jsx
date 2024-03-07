import { useState } from "react";
import "./App.css";
// import Phone from "./phone/phone";
import { Phone } from "./phone/phone";
import { useEffect } from "react";

function App() {
  // const phone = [
  //   { id: "1", name: "apple", price: 100000 },
  //   { id: "1", name: "apple", price: 100000 },
  //   { id: "1", name: "apple", price: 100000 },
  // ];

  // const phone = [
  //   { id: 1, name: "iPhone 13", price: 999.99 },
  //   { id: 2, name: "Galaxy S21", price: 899.95 },
  //   { id: 3, name: "Pixel 6", price: 799.0 },
  //   { id: 4, name: "OnePlus 9 Pro", price: 899.0 },
  // ];

  const [phone, setphone] = useState([]);

  useEffect(() => {
    fetch("phoneinfo.json")
      .then((res) => res.json())
      .then((data) => setphone(data));
  }, []);

  return (
    <>
      <h1>practise 41</h1>
      {phone.map((allphone) => (
        <Phone key={phone.id} allphone={allphone}></Phone>
      ))}
    </>
  );
}

export default App;
