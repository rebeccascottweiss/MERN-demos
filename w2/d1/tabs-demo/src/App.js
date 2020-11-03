import "./App.css";

import Tabs from "./components/Tabs";
import Tabs2 from "./components/Tabs2";

function App() {
  return (
    <div className="App">
      <Tabs
        tabItems={[
          {
            label: "Tab1",
            content: "Tab1 Content",
            callback() {
              console.log(this.label, "was clicked");
            },
          },
          {
            label: "Tab2",
            content: "Tab2 Content",
            callback() {
              console.log(this.label, "was clicked");
            },
          },
          {
            label: "Tab3",
            content: "Tab3 Content",
            callback() {
              console.log(this.label, "was clicked");
            },
          },
        ]}
      />

      {/* <Tabs2
        tabItems={[
          {
            label: "Tab1",
            content: "Tab1 Content",
            isSelected: false,
          },
          {
            label: "Tab2",
            content: "Tab2 Content",
            isSelected: true,
          },
          {
            label: "Tab3",
            content: "Tab3 Content",
            isSelected: false,
          },
        ]}
      /> */}
    </div>
  );
}

export default App;
