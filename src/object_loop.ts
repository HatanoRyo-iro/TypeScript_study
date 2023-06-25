const foo: { [key: string]: number } = { a: 1, b: 2, c: 3 };
for (const prop in foo) {
  console.log(prop, foo[prop]);
}

console.log("--------------------");

const example = { a: 4, b: 5, c: 6 };
for (const [key, value] of Object.entries(example)) {
  console.log(key, value);
}

console.log("--------------------");

const example2 = { a: 7, b: 8, c: 9 };
for (const key of Object.keys(example2)) {
  console.log(key);
}

console.log("--------------------");

const example3 = { a: 10, b: 11, c: 12 };
for (const value of Object.values(example3)) {
  console.log(value);
}
