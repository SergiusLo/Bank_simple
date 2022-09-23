const transactions = [300, 250, -150, 5000, 140, 567, -1300, -500, 40];

const usdToEuro = 0.86;

// const transactionsEuro = transactions.map(function (trans) {
//   return trans * usdToEuro;
// });
const transactionsEuro = transactions.map((trans) => trans * usdToEuro);

// console.log(transactions);
console.log(transactionsEuro);

// const transactionsEuro1 = [];

// for (const trans of transactions) {
//   transactionsEuro1.push(trans * usdToEuro);
// }
// console.log(transactionsEuro1);

const transactionDescriptions = transactions.map(
  (transaction, index) =>
    `Transaction № ${index + 1}: ${Match.abs(transaction)} was ${
      transaction > 0 ? "deposited" : "withdrew"
    }`
);

console.log(transactionDescriptions);
