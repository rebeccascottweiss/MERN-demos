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
          { author: "Student1", text: "I'll study later." },
          { author: "Student2", text: "I'm leaving the house right now." },
        ]}
      />

      <h2>Another List of Quotes</h2>
      <QuoteList
        quotes={[
          {
            author: "10x Programmer",
            text: "Programmer: it will be done in an hour.",
          },
          {
            author: "Literally, everyone",
            text: "Pineapples do not belong on Pizza",
          },
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
