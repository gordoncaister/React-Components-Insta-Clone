//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummydata from "../../dummy-data"
const PostsPage = () => {

  const [posts] = useState(dummydata);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {posts.map (e => (<Post  post={e}/>))}
    </div>
  );
};

export default PostsPage;

