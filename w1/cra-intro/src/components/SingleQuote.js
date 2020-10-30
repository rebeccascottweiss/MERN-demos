import React from "react";

import styles from "./SingleQuote.module.css";

const SingleQuote = (props) => {
  // console.log(props);
  // console.log("author", props.quote.author);
  // console.log("text", props.quote.text);

  return (
    <div>
      <u>{props.quote.author}</u>:{" "}
      <q className={`${styles.italic} ${styles.bold}`}>{props.quote.text}</q>
    </div>
  );
};

export default SingleQuote;
