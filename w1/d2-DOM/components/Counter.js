class Counter {
  /**
   * The constructor function used to construct a new instance of a counter
   * that will be added to the HTML document.
   * @param {Object} props The properties of
   *  the counter, such as the button text, and
   *  paragraph text.
   * @param {string} props.headingText The text for the h2 element
   *  that will be at the top of the counter.
   * @param {string} props.buttonText The text for the button of this counter.
   * @param {Object} parentNode The HTML node that this
   *  new counter will be appended into as a child.
   */
  constructor(props, parentNode) {
    this.count = 0;

    // create a div HTML node, which we can now interact with as if we selected
    // it from the HTML document itself, but it is not yet added to the document.
    const container = document.createElement("div");
    container.style.border = "1px solid green";
    container.style.margin = "5px";
    container.style.padding = "5px";

    const heading = document.createElement("h2");
    heading.innerText = props.headingText;
    container.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.innerText = `The button has been clicked ${this.count} times.`;
    container.appendChild(paragraph);

    const btn = document.createElement("button");
    btn.innerText = props.buttonText;
    btn.addEventListener("click", (event) => {
      this.count++;
      console.log(this.count);
      paragraph.innerText = `The button has been clicked ${this.count} times.`;
    });
    container.appendChild(btn);

    container.classList.add("class1", "class2");

    // once we are done adding everything into the container,
    // add the container to the page / document
    parentNode.appendChild(container);
  }
}

export default Counter;
