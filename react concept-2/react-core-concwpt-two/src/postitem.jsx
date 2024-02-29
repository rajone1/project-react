import { useEffect, useState } from "react";
import Postdisplay from "./showpost";
export default function Postname() {
  const [post, setpost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setpost(data));
  }, []);

  return (
    <div>
      <h2>post:{post.length}</h2>
      {post.map((postitm) => (
        <Postdisplay post={postitm}></Postdisplay>
      ))}
    </div>
  );
}
