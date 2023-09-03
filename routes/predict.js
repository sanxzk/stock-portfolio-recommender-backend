const express = require("express");
const router = express.Router();

const daysBetween = require("../service/daysBetween");
const getBestStocks = require("../service/getBestStocks");
const getReturnPercentage = require("../service/getReturnPercentage");
const generateFullData = require("../service/generateFullData");

const referenceIsoString = "2000-01-03T00:00:00Z";

function getCurrentISODate() {
  const now = new Date();
  return now.toISOString(); // Generates ISO 8601 date string
}
router.get("/", (req, res) => {
  let errorCode = null;
  try {
    // console.log("reached")
    const principle = req.headers.principle;
    const expectedDate = req.headers.expecteddate;
    const factor = req.headers.factor;

    const currentDay = daysBetween(referenceIsoString, getCurrentISODate());
    const desiredDay = daysBetween(referenceIsoString, expectedDate);
    const ratePercentages = getReturnPercentage(factor, currentDay, desiredDay);
    const currentPrice = generateFullData(factor, currentDay);
    const stocks = getBestStocks(ratePercentages, principle, currentPrice);
    res.status(200).json({ success: true, stocks });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

module.exports = router;
