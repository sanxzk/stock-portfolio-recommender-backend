function daysBetween(startDate, endDate) {
  // Convert the dates to Date objects.
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in milliseconds.
  const difference = end - start;

  // Convert the milliseconds to days.
  return Math.floor(difference / 86400000);
}

module.exports = daysBetween;
