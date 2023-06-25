const item = { price: 100 };
const { price } = item; // const price = item.price;と同じ意味
console.log(price);

const continent = {
  name: "日本",
  jp: {
    capital: "東京",
    population: 10000000,
  },
};

const {
  jp: { capital, population },
} = continent;

console.log(capital); // const capital = continent.jp.capital;と同じ意味
console.log(population); // const population = continent.jp.population;と同じ意味
