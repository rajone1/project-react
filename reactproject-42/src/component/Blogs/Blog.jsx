import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
  const [bloge, setbloge] = useState([]);

  useEffect(() => {
    fetch("bloge1.json")
      .then((res) => res.json())
      .then((data) => setbloge(data));
  }, []);

  return <div></div>;
};

export default Blog;
