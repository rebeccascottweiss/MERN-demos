import React from "react";

class Counter extends React.Component {
  /* 
    props are passed in from the parent component,
    which is the component that this <Counter /> tag
    will be inside of. When <Counter /> is used, that
    instantiates this class.
  */
  constructor(props) {
    // pass the props to the parent constructor so the
    // parent can supervise our child class
    super(props);
    console.log(props);

    this.state = {
      clickCount: props.start,
      clickTimes: [],
    };
  }

  // adding a method to our class
  handleClick = (event) => {
    console.log(event);

    this.setState({
      clickCount: this.state.clickCount + 1,
      clickTimes: [...this.state.clickTimes, new Date()],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Clicked {this.state.clickCount}
        </button>
        <ul>
          {this.state.clickTimes.map((date, i) => {
            return <li key={i}>{date.toString()}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Counter;
