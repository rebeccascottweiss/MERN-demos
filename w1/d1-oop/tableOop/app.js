document.body.style.backgroundColor = "black";

const sitAtTableImgUrl =
  "https://www.meme-arsenal.com/memes/87906a2ff410839cf45ea2e9678a98aa.jpg";
const tableFlipImgUrl =
  "https://i.kym-cdn.com/entries/icons/facebook/000/006/306/FlipTable.jpg";

class Table {
  constructor(
    modelName,
    color,
    material,
    price,
    measurements,
    images = {},
    legs = [],
    capacity = 4,
    occupants = []
  ) {
    this.modelName = modelName;
    this.color = color;
    this.material = material;
    this.price = price;
    this.measurements = measurements;
    this.images = images;
    this.legs = legs;
    this.capacity = capacity;
    this.occupants = occupants;
    this.isClean = true;
    this.isBroken = false;
    this.isSet = false;
    this.flipped = false;

    this.imgNode = document.createElement("img");
    this.imgNode.style.width = "50%";
    document.body.appendChild(this.imgNode);

    this.activeImg = images.default;
  }

  printOccupants() {
    for (let i = 0; i < this.occupants.length; i++) {
      const occupant = this.occupants[i];
      console.log(`Occupant #${i + 1}: ${occupant.fullName()}`);
    }
  }

  // any time this.activeImg is provided a value
  // this method will run and be given the value that is being set
  set activeImg(url) {
    this.imgNode.src = url;
    console.dir(this.imgNode);
  }

  flip() {
    this.activeImg = this.images.flipped;
    this.flipped = true;
  }
}

class TableLeg {
  // __init__
  constructor(color, material, shape = "round") {
    // self.attr = val
    this.color = color;
    this.material = material;
    this.shape = shape;
  }
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  flipTable(table) {
    table.flip();
    console.log(`${this.fullName()} flipped ${table.modelName}`);
  }
}

const cheapoTable = new Table(
  "Cheapo",
  "Dirt",
  "Used Pizza Box Cardboard",
  "$3",
  "TODO Measurements",
  { default: sitAtTableImgUrl, flipped: tableFlipImgUrl },
  [
    new TableLeg("Chestnut", "Plastic Bottles", "Exceptionally Tubular"),
    new TableLeg("Chestnut", "Plastic Bottles", "Exceptionally Tubular"),
    new TableLeg("Chestnut", "Plastic Bottles", "Exceptionally Tubular"),
    new TableLeg("Chestnut", "Plastic Bottles", "Exceptionally Tubular"),
  ]
);

cheapoTable.occupants.push(
  new Person("Allen", "Valdez"),
  new Person("Bob", "Dole"),
  new Person("Goku", "San")
);

console.log(cheapoTable);

const flipBtn = document.getElementById("flip");

flipBtn.addEventListener("click", function (event) {
  cheapoTable.occupants[1].flipTable(cheapoTable);
});
