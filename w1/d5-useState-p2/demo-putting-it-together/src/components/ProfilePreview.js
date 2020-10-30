import React, { useState } from "react";

const ProfilePreview = (props) => {
  console.log(props);
  const { username, likeCount, thumbnailUrl, bio } = props.data;

  const [likes, setLikes] = useState(likeCount);
  // destructure the props so we don't have to keep typing props.
  // this is not necessary, just nice

  const containerStyle = {
    borderRadius: 5,
    padding: 50,
    border: "1px solid gray",
    marginBottom: 20,
    boxShadow: "10px 5px 5px darkgray",
    maxWidth: 250,
  };

  const imgStyle = {
    borderRadius: "200px",
    boxShadow: "10px 5px 5px gray",
  };

  const getHearts = () => {
    // return [...Array(likes).keys()].map(() => {
    //   return <span style={{ color: "red" }}>&#10084;</span>;
    // });

    const heartsJSX = [];

    for (let i = 0; i < likes; i++) {
      heartsJSX.push(<span style={{ color: "red" }}>&#10084;</span>);
    }

    return heartsJSX;
  };

  return (
    <div style={containerStyle}>
      <h2>{username}</h2>
      <p>
        <span
          role="img"
          aria-label="Thumbs Up"
          style={{ cursor: "pointer" }}
          onClick={(event) => {
            setLikes(likes + 1);
          }}
        >
          &#128077;
        </span>{" "}
        {likes}
      </p>
      <p>{getHearts()}</p>
      <img style={imgStyle} width="100%" src={thumbnailUrl} alt="Thumbnail" />
      <h4>Bio</h4>
      <p>{bio}</p>
    </div>
  );
};

export default ProfilePreview;
