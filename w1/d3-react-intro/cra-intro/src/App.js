import "./App.css";

import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
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

      <Counter start={5} messageFromParent="Hello My Beautiful Child" />
      <Counter start={0} />
    </div>
  );
}

export default App;
