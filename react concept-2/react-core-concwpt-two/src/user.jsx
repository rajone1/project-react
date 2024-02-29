import { useEffect, useState } from "react";

export default function User() {
  const [usersss, setusers] = useState([]);

  useEffect(() => {
    // const url ={}
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setusers(data.length));
  }, []);

  return (
    <div style={{}}>
      <h3>info:{usersss}</h3>
    </div>
  );
}

/**
 * 1. declare a state to hold the data
 * 2. useEffect with call back and dependency array
 * 3. use fetch to load data
 */
