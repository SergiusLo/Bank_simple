const transactions = [300, 250, -150, 5000, 140, 567, -1300, -500, 40];

transactions.sort((x, y) => y - x);
console.log(transactions);
transactions.sort((x, y) => x - y);
console.log(transactions);

transactions.sort((x, y) => {
  if (x > y) {
    return -1;
  }
  if (x < y) {
    return 1;
  }
});
console.log(transactions);

transactions.sort((x, y) => {
  if (x > y) {
    return 1;
  }
  if (x < y) {
    return -1;
  }
});
console.log(transactions);
