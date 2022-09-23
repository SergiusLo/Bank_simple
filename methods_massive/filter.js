const transactions = [300, 250, -150, 5000, 140, 567, -1300, -500, 40];

const plusTrans = transactions.filter((trans) => trans > 0);
console.log(plusTrans);

// const transPlus = [];

// for (const trans of transactions) {
//   if (trans > 0) {
//     transPlus.push(trans);
//   }
// }

// console.log(transPlus);
