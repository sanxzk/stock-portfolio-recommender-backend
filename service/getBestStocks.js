const getAllKeys = require("./getAllKeys");
const names = ["Stock A", "Stock B", "Stock C", "Stock D", "Stock E"];
const profitPercentages = [5, 7, 3, 10, 2];
const stockPrices = [100, 150, 80, 200, 50];
const budget = 300;

const getBestStocks = (ratePercentages, budget, currentPrices) => {
  try {
    const names = getAllKeys();
    const tempBudget = budget;
    const stockData = [];
    names.map((name) => {
      stockData.push({
        name: name,
        price: currentPrices[name],
        profit: ratePercentages[name],
      });
    });
    stockData.sort((a, b) => a.price - b.price);
    stockData.sort((a, b) => b.profit - a.profit);

    let selectedStocks = [];
    for (let i = 0; i < stockData.length; i++) {
      const { name, price, profit } = stockData[i];
      if (profit < 0 || budget <= 0) break;
      let m = Math.floor(budget / price);
      budget -= m * price;
      if (m > 0) selectedStocks.push({ name, quantity: m, price });
    }
    return { selectedStocks, totalPrincipleUsed: tempBudget - budget };
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getBestStocks;
