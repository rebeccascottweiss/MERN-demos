import React, { useState } from "react";

import SingleQuote from "./SingleQuote";

const QuoteList = (props) => {
  // console.log(props);

  // props.quotes is the initial array of quotes passed in from App.js
  // the quotes state starts out as the initial array
  // array destructure syntax
  // [firstItem, secondItem] = twoItemArray
  // the firstItem is the current state, the second item is
  // a function used to update the current state
  const [quotesState, setQuotesState] = useState(props.quotes);
  const [quoteText, setQuoteText] = useState("");
  const [author, setAuthor] = useState("");
  const [authorErr, setAuthorErr] = useState("must not be empty");

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

  function displayQuotesWithoutMap() {
    const jsxElements = [];

    for (let i = 0; i < quotesState.length; i++) {
      const quoteStr = quotesState[i];
      jsxElements.push(
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
    }
    return jsxElements;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(author, quoteText);

    const newQuote = {
      author: author,
      text: quoteText,
      isSelected: false,
    };

    // call setQuotesState to update quotesState variable to add our newQuote
    // setQuotesState needs to be passed a BRAND NEW array of all current quotes plus the newQuote
    setQuotesState([...quotesState, newQuote]);
    setAuthor("");
    setQuoteText("");
  }

  const selectQuote = (selectedIdx) => {
    const updatedQuotes = quotesState.map((quote, i) => {
      if (i === selectedIdx) {
        // reverse the value of isSelected
        quote.isSelected = !quote.isSelected;
      }

      // return the original quote or the updated quote if it was changed above
      return quote;
    });

    setQuotesState(updatedQuotes);
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>Author: </label>
          <span style={{ color: "red" }}>{authorErr}</span>
          <input
            onChange={(event) => {
              if (event.target.value.length === 0) {
                setAuthorErr("must not be empty");
              } else if (event.target.value.length > 10) {
                setAuthorErr("must be less than 11");
              } else if (event.target.value.length < 2) {
                setAuthorErr("must be more than 2 characters");
              } else {
                setAuthorErr("");
              }

              setAuthor(event.target.value);
            }}
            type="text"
            value={author}
          />
        </div>

        <div>
          <label>Quote: </label>
          <input
            onChange={(event) => {
              setQuoteText(event.target.value);
            }}
            type="text"
            value={quoteText}
          />
        </div>

        <button>Submit</button>
      </form>
      <hr />
      {quotesState.map((quoteObj, i) => {
        const quoteStyles = {};

        if (quoteObj.isSelected) {
          quoteStyles.backgroundColor = "lightblue";
        }

        return (
          <div
            key={i}
            onClick={(event) => {
              selectQuote(i);
            }}
            style={quoteStyles}
          >
            <hr />
            <SingleQuote quote={quoteObj} />{" "}
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

      {/* {displayQuotesWithoutMap()} */}
    </div>
  );
};

export default QuoteList;
