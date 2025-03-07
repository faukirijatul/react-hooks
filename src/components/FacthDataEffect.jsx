import React, { useEffect, useState } from "react";

const FacthDataEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setPosts(json));
    };

    fecthData();
  }, []);

  return (
    <div>
      <h2>{posts[0]?.title}</h2>
    </div>
  );
};

export default FacthDataEffect;
