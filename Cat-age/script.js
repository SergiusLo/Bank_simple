// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому создайте неглубокую (shallow) копию массива Жени и удалите возраст собак из этого скопированного массива (потому что это плохая практика изменять параметры функции).
// 2. Создайте массив с данными Жени (исправленными) и Юли.
// 3. Для каждой оставшейся кошки выведите в консоль,  если она взрослая: ("Кошка № 1 взрослая, ей 6 лет "), если котёнок (" Кошка № 2 ещё котёнок ")
// 4. Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1.	Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// 2.	Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

const catsJaneData1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJuliaData1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const catsJaneData2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const catsJuliaData2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

const verifyCats = function (catsJane, catsJulia) {
  //   const catsJaneCorrect = catsJane.slice();
  const catsJaneCorrect = [...catsJane];
  //   console.log(catsJaneCorrect);
  catsJaneCorrect.splice(0, 1);
  catsJaneCorrect.splice(-1);
  //   console.log(catsJaneCorrect);
  //   console.log(catsJane);

  const cats = catsJaneCorrect.concat(catsJulia);
  //   const cats = [...catsJaneCorrect, ...catsJulia];
  //   console.log(cats);

  cats.forEach(function (catAge, index) {
    if (catAge >= 2) {
      console.log(`Кошка ${index + 1} взрослая, ей ${catAge} лет `);
    } else {
      console.log(`Кошка ${index + 1} ещё котёнок`);
    }
  });
};

verifyCats(catsJaneData1, catsJuliaData1);
console.log("--------------------------");
verifyCats(catsJaneData2, catsJuliaData2);

const humanAge1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const humanAge2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
const humanAgesTotal = [...humanAge1, ...humanAge2];

// console.log(humanAges);
const getAverageHumanAge = function (catAge) {
  const humanAges = catAge
    .map((catAge) => (catAge <= 2 ? catAge * 10 : catAge * 7))
    .filter((humanAge) => humanAge >= 18)
    .reduce((acc, item) => acc + item, 0);
    const averange = 
  // return humanAges;
  // return humanAges / 8;
  return humanAges;
  // .reduce((acc, humanAge) => acc + humanAge, 0) / humanAges.lenght;
};
console.log(getAverageHumanAge(humanAge1));

// const getAverageHumanAge = function (catAges) {
//   const humanAges = catAges.map((catAge) =>
//     catAge <= 2 ? catAge * 10 : catAge * 7
//   );
//   console.log(humanAges);
//   const adultCats = humanAges.filter((humanAges) => humanAges >= 18);
//   console.log(adultCats);
//   const averageHumanAge =
//     adultCats.reduce((acc, catAge) => acc + catAge, 0) / adultCats.length;
//   console.log(averageHumanAge);
//   return averageHumanAge;
// };
// const averageHumanAge1 = getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);

// console.log(averageHumanAge1);
// console.log(getAverageHumanAge(humanAge1));
