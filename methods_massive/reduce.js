const transactions = [300, 250, -150, 5000, 140, 567, -1300, -500, 40];

// const balance = transactions.reduce(function (acc, item) {
//   return acc + item;
// }, 0);
// console.log(balance);

const balance = transactions.reduce((acc, item) => acc + item, 0);
console.log(balance);

let sum = 0;

for (const trans of transactions) {
  sum += trans;
}
console.log(sum);

// const min = transactions.reduce((acc, trans) => {
//   if (acc < trans) {
//     return acc;
//   } else {
//     return trans;
//   }
// }, transactions[0]);
// console.log(min);
const min = transactions.reduce(
  (acc, trans) => (acc < trans ? acc : trans),
  transactions[0]
);
console.log(min);
