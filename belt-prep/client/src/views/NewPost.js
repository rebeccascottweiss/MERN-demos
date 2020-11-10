import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newPost = {
      // long-form key: value pair
      title: title,

      // shorthand when key name matches value variable name
      description,
      primaryCategory,
      secondaryCategory,
      imgUrl,
    };

    axios
      .post("http://localhost:8000/api/posts", newPost)
      .then((res) => {
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>Title:</label>
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Description:</label>
          <input
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Primary Category:</label>
          <input
            onChange={(event) => {
              setPrimaryCategory(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Secondary Category:</label>
          <input
            onChange={(event) => {
              setSecondaryCategory(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Image Url:</label>
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            type="text"
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
