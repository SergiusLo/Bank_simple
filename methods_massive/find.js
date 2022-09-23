const transactions = [300, 250, -150, 5000, 140, 567, -1300, -500, 40];

const firstDeposite = transactions.find((trans) => trans > 0);
const firstWithdrawal = transactions.find((trans) => trans < 0);

console.log(firstDeposite);
console.log(firstWithdrawal);
