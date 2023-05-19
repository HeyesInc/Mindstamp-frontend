import HomepagePosts from "./HomepagePosts";
import React, { useState, useEffect } from "react";

export default function Homepage({ isLoggedIn }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:8080/posts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setPosts(result);
        });
    }
  }, []);

  return (
    <div className="width">
      {isLoggedIn ? (
        <HomepagePosts posts={posts} />
      ) : (
        <p>Please log in to access the content.</p>
      )}
    </div>
  );
}
