const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

//soal1
console.log("SOAL 1");
const names = fruits.map((el) => el.fruitName);
console.log(names);

//soal2
console.log("\nSOAL 2");

let counta = 0;
let countb = 0;
console.log(`Buah jenis import yaitu : `);
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].fruitType == "IMPORT") {
    counta++;
    console.log(fruits[i].fruitName);
  }
}
console.log("total jenis import : " + counta + " buah");

console.log(`\nBuah jenis local yaitu : `);
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].fruitType == "LOCAL") {
    countb++;
    console.log(fruits[i].fruitName);
  }
}
console.log("total jenis LOCAL : " + countb + " buah\n");

//soal3
console.log("\nSOAL 3");

// const total = fruits.map((e) => e.stock);
// console.log("Stok buah : ", total);
for (let a = 0; a < fruits.length; a++) {
  console.log("Buah ", fruits[a].fruitName, "Stocknya ", fruits[a].stock);
}
let sum2 = 0;
for (let a = 0; a < fruits.length; a++) {
  sum2 += fruits[a].stock;
}
console.log("Total stock : ", sum2);

//soal4
