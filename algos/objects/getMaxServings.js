/* 
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:

    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)

  Output:
    int (max servings)

  Side note (not needed for solution): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the avaialable ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

const recipe1 = {
  "organic fat": 99,
  "live squid": 1,
  "birds nest": 1,
  "fried flesh": 1,
  spicy: 5,
  "gourmet memes": 4200,
};

const available1 = {
  "organic fat": 990,
  "live squid": 1,
  "birds nest": 10,
  "fried flesh": 10,
  spicy: 50,
  "gourmet memes": 42000,
  sugar: 9001,
  spice: 5,
  "everything nice": 1,
  "triple point water": 5,
};
const expected1 = 1;
// because only 1 live squid is available and that is the limiting ingredient

// same as available1, except live squid has 10
const available2 = { ...available1, ["live squid"]: 10 };
const expected2 = 10;

const available3 = { ...available1, ["live squid"]: 0 };
const expected3 = 0;

/**
 *
 * @param   {Object} recipe
 * @param   {Object} available
 *          @recipe and @available keys are ingredient
 *          names and values are int for the amount available.
 *          Values will be positive integers.
 * @return  {number}
 *          Max servings that can be made from
 *          @recipe using @available
 * Time:    O(n) linear
 *          n = @recipe number of keys.
 * Space:   O(1) constant
 */
function getMaxServings(recipe, available) {
  let limitingAmount = Infinity;

  for (const reqIngred in recipe) {
    const availableAmnt = available[reqIngred];
    const reqAmnt = recipe[reqIngred];

    if (!available.hasOwnProperty(reqIngred) || availableAmnt < reqAmnt) {
      // missing ingredient, can't make any
      return 0;
    }

    // how many servings can be made based on this 1 ingredient
    let servingsPerIngred = availableAmnt / reqAmnt;

    if (servingsPerIngred < limitingAmount) {
      limitingAmount = servingsPerIngred;
    }
  }
  return Math.floor(limitingAmount);
}

// Time complexity: O(4n) but constant is dropped -> O(n)
// 4n comes from counting .entries, .map, spread operator, .min which are all loops
// Space: O(2n) from .entries and .map array -> O(n)
function getMaxServing(recipe, available) {
  return (
    Math.min(
      ...Object.entries(recipe).map(
        ([ingred, requiredAmnt]) => available[ingred] / requiredAmnt
      )
    ) || 0
  );
}

module.exports = {
  getMaxServings,
};
