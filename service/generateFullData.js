const data = require("../Stockfile.json");
const getAllKeys = require("./getAllKeys");

const generateFullData = (factor, TotalIndex) => {
  try {
    while (data.length <= TotalIndex) data.push({});
    const keys = getAllKeys(data[0]);
    keys.map((key) => {
      let i = 2596;
      let sum = 0;
      while(data.length <TotalIndex) data.push({});
      for (let temp = i; temp >= i - factor; temp--) sum += data[temp][key];
      for (; i < TotalIndex; ++i) {
        let curr = sum / factor;
        data[i][key] = curr;
        sum -= data[i - factor][key];
        sum += curr;
      }
    });
    return data[TotalIndex-1];
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = generateFullData;
