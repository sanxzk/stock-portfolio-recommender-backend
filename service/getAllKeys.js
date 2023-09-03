const data = require("../Stockfile.json");

const getAllKeys = () => {
  var keys = [];
  for (var k in data[0]) keys.push(k);
  return keys;
};

module.exports = getAllKeys;
