const a = 32423443543.21;

const options = {
  style: "unit",
  unit: "mile-per-hour",
  currency: "EUR",
};

console.log("US", new Intl.NumberFormat("en-US", options).format(a));
console.log("Ukraine", new Intl.NumberFormat("uk-UA", options).format(a));
