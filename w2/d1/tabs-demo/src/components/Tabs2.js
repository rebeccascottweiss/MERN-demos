import React, { useState } from "react";

const Tabs = (props) => {
  console.log(props);

  const [tabItems, setTabItems] = useState(props.tabItems);

  function selectedTab(selectedIdx) {
    const updatedTabItems = tabItems.map((tab, i) => {
      if (i === selectedIdx) {
        tab.isSelected = true;
      } else {
        tab.isSelected = false;
      }

      return tab;
    });

    setTabItems(updatedTabItems);
  }

  function findSelectedTab() {
    for (let i = 0; i < tabItems.length; i++) {
      if (tabItems[i].isSelected === true) {
        return tabItems[i];
      }
    }
  }

  return (
    <div style={{ marginTop: 40 }}>
      <header>
        {tabItems.map((tab, i) => {
          const labelStyles = {
            padding: 20,
            marginRight: 10,
            border: "1px solid gray",
          };

          if (tab.isSelected) {
            labelStyles.backgroundColor = "black";
            labelStyles.color = "white";
          }

          return (
            <span
              key={i}
              onClick={(event) => {
                selectedTab(i);
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
        <h3>{findSelectedTab().content}</h3>
        {/* <h3>
          {
            tabItems.find((tab) => {
              return tab.isSelected;
            }).content
          }
        </h3> */}
      </main>
    </div>
  );
};

export default Tabs;
