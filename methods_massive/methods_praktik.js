const account1 = {
  userName: "Cecil Ireland",
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: "Amani Salt",
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: "Corey Martinez",
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: "Kamile Searle",
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: "Oliver Avila",
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Ex. 1
const bankDepositsTotal = accounts
  .flatMap((account) => account.transactions)
  .filter((trans) => trans > 0)
  .reduce((acc, dep) => acc + dep, 0);
console.log(bankDepositsTotal);

// ex. 2
// const withdeawalsOver300 = accounts
//   .flatMap((account) => account.transactions)
//   .filter((trans) => trans <= -300).length;
// console.log(withdeawalsOver300);

const withdeawalsOver300 = accounts
  .flatMap((account) => account.transactions)
  .reduce((counter, trans) => (trans <= -300 ? counter + 1 : counter), 0);
console.log(withdeawalsOver300);

// ex.3
const { depositeTotal, withdrawalsTotal } = accounts
  .flatMap((account) => account.transactions)
  .reduce(
    (acc, trans) => {
      // trans > 0
      //   ? (acc.depositeTotal += trans)
      //   : (acc.withdrawalsTotal += trans);
      acc[trans > 0 ? "depositeTotal" : "withdrawalsTotal"] += trans;
      return acc;
    },
    { depositeTotal: 0, withdrawalsTotal: 0 }
  );

console.log(depositeTotal, withdrawalsTotal);

const text1 = "для чего нужны массивы в javascript";

const textTitleCase = function (text) {
  const exeptions = ["с", "для", "в", "и"];

  const capitalizeString = (word) => word[0].toUpperCase() + word.slice(1);
  const titleCase = text
    .toLowerCase()
    .split(" ")
    .map((word) => (exeptions.includes(word) ? word : capitalizeString(word)))
    .join(" ");
  return capitalizeString(titleCase);
};
console.log(textTitleCase(text1));
