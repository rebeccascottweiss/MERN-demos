import "./App.css";

import Counter from "./components/Counter";
import SingleQuote from "./components/SingleQuote";
import QuoteList from "./components/QuoteList";

function App() {
  return (
    <div className="App">
      {/* using the component's tag IS EXECUTING the function */}
      {/* <SingleQuote>
        Across The Vast Expanse Of Space, Memes Echo Into Eternity.{" "}
        <span>Don't forget about me, I'm your child too.</span>
      </SingleQuote> */}

      {/* Execute the QuoteList function and pass it props (params) */}
      <QuoteList
        quotes={[
          "Across The Vast Expanse Of Space, Memes Echo Into Eternity.",
          "Born too early to explore the galaxy. Born too late to explore the earth. Born just in time to browse dank memes.",
          "I'll study later.",
          "I'm leaving the house right now.",
        ]}
      />

      <h2>Another List of Quotes</h2>
      <QuoteList
        quotes={[
          "Programmer: it will be done in an hour.",
          "Pineapples do not belong on Pizza",
        ]}
      />

      {/* <div>Hello from create react app</div>
      <button
        onClick={(event) => {
          console.log("clicked!", event);
        }}
      >
        Click Me!
      </button> */}

      {/* 
        this instantiates the Counter class
        calling it's constructor function
       */}

      {/* <Counter start={5} messageFromParent="Hello My Beautiful Child" /> */}
      {/* <Counter start={0} /> */}
    </div>
  );
}

export default App;
