import React, { useState } from "react";

import SingleQuote from "./SingleQuote";

const QuoteList = (props) => {
  // props.quotes is the initial array of quotes passed in from App.js
  // the quotes state starts out as the initial array
  // array destructure syntax
  // [firstItem, secondItem] = twoItemArray
  // the firstItem is the current state, the second item is
  // a function used to update the current state
  const [quotesState, setQuotesState] = useState(props.quotes);
  console.log(props);

  const handleDelete = (delIdx) => {
    /*** using .filter long-form ***/
    // whenever you update the state of an object / array
    // you should provide a BRAND NEW object / array
    const filteredQuotes = quotesState.filter((quoteStr, i) => {
      return delIdx !== i;
    });

    setQuotesState(filteredQuotes);

    /*** the OG way without using .filter ***/
    // const filteredQuotes2 = [];

    // for (let i = 0; i < quotesState.length; i++) {
    //   if (i !== delIdx) {
    //     filteredQuotes2.push(quotesState[i]);
    //   }
    // }

    // setQuotesState(filteredQuotes2);

    /*** shorthand .filter ***/
    // setQuotesState(quotesState.filter((_, i) => delIdx !== i));
  };

  return (
    <div>
      {quotesState.map((quoteStr, i) => {
        return (
          <div key={i}>
            <hr />
            {/* This is a nested child component being rendered by the QuoteList parent component */}
            <SingleQuote>{quoteStr}</SingleQuote>{" "}
            <button
              onClick={(event) => {
                handleDelete(i);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default QuoteList;
