import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Posts = (props) => {
  const [posts, setPosts] = useState(null);

  // arg2 passed into useEffect is the empty array which means useEffect
  // should only be executed once when the component is loaded for the first time
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then((res) => {
        console.log("get all posts", res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDelete(delId) {
    axios
      .delete("http://localhost:8000/api/posts/" + delId)
      .then((res) => {
        // since we delete on the same page as we display, we need to tell react
        // to update the state that is displayed when our db responds.
        const filteredPosts = posts.filter((post) => {
          return delId !== post._id;
        });

        setPosts(filteredPosts);
      })
      .catch((err) => {
        console.log(err);
      });

    // const filteredArr = [];

    // for (let i = 0; i < posts.length; i++) {
    //   if (posts[i]._id !== delId) {
    //     filteredArr.push(posts[i]);
    //   }
    // }

    // setPosts(filteredArr);
  }

  // database has not responded to our request for data yet..
  if (posts === null) {
    return "Loading...";
  }

  return (
    <div style={{ textAlign: "center" }}>
      {posts.map((post, i) => {
        return (
          <div key={post._id}>
            <div style={{ display: "inline-block", padding: 20 }}>
              <h2>
                <span>{post.likeCount}</span>
                <img
                  src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png"
                  alt="Likes"
                  width="30px"
                />{" "}
                Title: {post.title}
              </h2>
              <ul style={{ textAlign: "left" }}>
                <li>Primary Category: {post.primaryCategory}</li>
                <li>Secondary Category: {post.secondaryCategory}</li>
              </ul>
              <p>{post.description}</p>
              <img width="80%" src={post.imgUrl} alt={post.title} />
              <div>
                <button
                  onClick={(event) => {
                    handleDelete(post._id);
                  }}
                >
                  Delete
                </button>{" "}
                | <Link to={`/posts/${post._id}/edit`}>Edit</Link>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
