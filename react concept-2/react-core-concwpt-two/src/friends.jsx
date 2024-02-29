import { useEffect, useState } from "react";
import "./friends.css";
import friends2 from "./friend2";
import Friendsad from "./friend2";

export default function Friends() {
  const [friends, setfriend] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setfriend(data));
  }, []);

  return (
    <div className="box">
      {/* <Friends2></Friends2> */}
      {friends.map((friend) => (
        <Friendsad friendshow={friend}></Friendsad>
      ))}

      <h2>hello {friends.length}</h2>
    </div>
  );
}
