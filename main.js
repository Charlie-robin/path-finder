const { data } = require("./data.js");

const findPath = (start, end, data) => {
  if (!data || !start || !end) throw "not valid paramaters";
  if (!data[start] && !data[end]) throw "type error";

  // COUNTER FOR LETTERS VISITED
  const visited = [];

  // HOW MANY LETTERS TO VISIT => 8
  const letters = Object.keys(data);

  // TABLE TO UPDATE
  const table = letters.reduce((result, current) => {
    result[current] = { distanceFrom: Infinity, previous: "" };
    return result;
  }, {});

  // STARTING LETTER = 0
  table[start].distanceFrom = 0;
  let currentLetter = start;

  // GO THROUGH DATA UPDATE TABLE
  while (visited.length !== letters.length) {
    const connections = data[currentLetter];

    connections.forEach(({ letter, value }) => {
      const total = table[currentLetter].distanceFrom + value;
      if (total < table[letter].distanceFrom) {
        table[letter].distanceFrom = total;
        table[letter].previous = currentLetter;
      }
    });
    // TO INCREMENT LETTERS VISITED
    visited.push(currentLetter);

    // GET THE SHORTEST PATH
    const shortestPath = connections
      .filter((letter) => !visited.includes(letter.letter))
      .sort((current, previous) => current.value - previous.value)[0];

    // TO CATCH BOTTLENECKS => GO BACK TO START
    if (!shortestPath) currentLetter = start;
    else currentLetter = shortestPath.letter;
  }
  return table[end].distanceFrom;
};

module.exports = { findPath };
