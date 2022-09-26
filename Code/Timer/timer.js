const ingridients = ['Sushi', 'Kushi'];
const sushiTimer = setTimeout(
  (ingridient1, ingridient2) =>
    console.log(`Delivery in back: ${ingridient1}, ${ingridient2}`),
  3000,
  ...ingridients
);

console.log('Waiting...');

if (ingridients.includes('Sushi')) clearTimeout(sushiTimer);

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 3000);
// clearInterval();
