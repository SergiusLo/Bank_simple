const transactions = [300, 250, -150, 5000, 140, 567, -1300, -500, 40];

const totalWithdrawalEuro = transactions
  .filter((trans) => trans < 0)
  .map((trans) => trans * 0.86)
  .reduce((acc, trans) => acc + trans, 0);

console.log(totalWithdrawalEuro);
