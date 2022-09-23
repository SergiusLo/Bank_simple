const transactions = [300, 250, -150, 5000, 140, 567, -1300, -500, 40];

console.log(transactions.includes(50));
console.log(transactions.includes(150));

console.log(transactions.some((trans) => trans === 50));
const hasWithdrawals = transactions.some((trans) => trans < 0);
console.log(hasWithdrawals);
const hasWithdrawalsOver5000 = transactions.some((trans) => trans < -5000);
console.log(hasWithdrawalsOver5000);

console.log(transactions.every((trans) => trans < 0));
console.log(transactions.every((trans) => Math.abs(trans) > 20));
