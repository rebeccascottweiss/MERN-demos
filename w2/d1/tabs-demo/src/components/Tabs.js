import React, { useState } from "react";

const Tabs = (props) => {
  console.log(props);

  // provide a default starting value for selectedIdx of 1
  const [selectedIdx, setSelectedIdx] = useState(1);

  return (
    <div style={{ marginTop: 40 }}>
      <header>
        {props.tabItems.map((tab, i) => {
          const labelStyles = {
            padding: 20,
            marginRight: 10,
            border: "1px solid gray",
          };

          if (selectedIdx === i) {
            labelStyles.backgroundColor = "black";
            labelStyles.color = "white";
          }

          return (
            <span
              key={i}
              onClick={(event) => {
                setSelectedIdx(i);
                props.tabItems[i].callback();
              }}
              style={labelStyles}
            >
              {tab.label}
            </span>
          );
        })}
      </header>
      <main
        style={{
          margin: "50px",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid gray",
          padding: 30,
          width: "40%",
        }}
      >
        <h3>{props.tabItems[selectedIdx].content}</h3>
      </main>
    </div>
  );
};

export default Tabs;
