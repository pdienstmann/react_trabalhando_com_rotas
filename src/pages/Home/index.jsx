import React from "react";
import styles from "pages/Home/Home.module.css";

import posts from "json/posts.json";
import PostCard from "../../Components/Posts/PostCard";

function Start() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post}></PostCard>
        </li>
      ))}
    </ul>
  );
}

export default Start;
