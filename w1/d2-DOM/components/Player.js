/**
 * The function used to construct a new instance of a Player
 * that will be added to the HTML document.
 * @param {Object} props The properties of
 *  the counter, such as the button text, and
 *  paragraph text.
 * @param {number|string} props.rankText The rank
 * @param {Object} props.player The player object whose info will be displayed.
 * @param {Object} parentNode The HTML node that this
 *  new counter will be appended into as a child.
 */
const Player = (props, parentNode) => {
  const container = document.createElement("div");

  const rankingHeading = document.createElement("h2");
  rankingHeading.innerText = `Rank: ${props.rankText}`;
  container.appendChild(rankingHeading);

  const fullNameHeading = document.createElement("h3");
  fullNameHeading.innerText = `Name: ${props.player.fullName()}`;
  container.appendChild(fullNameHeading);

  const scoreParagraph = document.createElement("p");
  scoreParagraph.innerText = props.player.score;
  container.appendChild(scoreParagraph);

  parentNode.appendChild(container);
};

export default Player;
