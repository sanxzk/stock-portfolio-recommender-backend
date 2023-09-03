const generateFullData = require("./generateFullData");
const getAllKeys = require("./getAllKeys");

const getReturnPercentage = (factor, currentDay, desiredDay) => {
  try {
      const keys = getAllKeys();
      const projected = generateFullData(factor, desiredDay);
      const current = generateFullData(factor, currentDay);
      const ReturnPercentage = {};
    keys.map((key) => {
      let initial = current[key];
      let final = projected[key];
      let percent = ((final - initial) / initial) * 100;
      ReturnPercentage[key] =  percent;

    });
    return ReturnPercentage;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getReturnPercentage;
