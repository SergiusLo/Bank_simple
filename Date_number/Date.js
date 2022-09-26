const now = new Date();
console.log(now);

const futureDate = new Date(2222, 1, 13, 11, 28, 59);
console.log(Number(futureDate));
console.log(+futureDate);
console.log(-futureDate);

const getDaysBetweeen2Dates = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days = getDaysBetweeen2Dates(new Date(2021, 9, 12), new Date(2021, 9, 1));
console.log(days);
