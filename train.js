// console.log("Jack Ma maslahatlari:");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20-30
//   "ozingizni ishingizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga invest qiling", //50-60
//   "endi dam oling, foydasi yoq", //60~
// ];
// CALLBACK functions
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("please, insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//// setTimeout(function () {
// //   callback(null, list[5]);
// // }, 5000);
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(67, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });
// console.log("passed here 1");

//Asynch function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("please, insert a number");
//   else if (a <= 20) return null, list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(function () {
//         resolve(list[5]);
//       }, 5000);
//     });
//     // setTimeout(function () {
//     //     return null, list[5];
//     //   }, 5000);
//   }
// }

// call via then/catch
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// console.log("passed here 1");

// call via async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(67);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
//   javob = await maslahatBering(51);
//   console.log(javob);
//   javob = await maslahatBering(21);
//   console.log(javob);
// }
// run();

// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:

// function countLetter(letter, word) {
//   let count = 0;
//   if (typeof word === "string" && typeof letter === "string") {
//     word = word.toLowerCase().split("");
//     letter = letter.toLowerCase();
//     for (const ele of word) {
//       if (letter === ele) {
//         count++;
//       }
//     }
//     return count;
//   } else {
//     return "Please, insert a letter for the first argument and a string for the second argument to get a result";
//   }
// }

// const result = countLetter("e", "engineer");

// console.log("result:", result);

// B-TASK:

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

//masalaning yechimi:

// function countDigits(str) {
//   let count = 0;
//   if (typeof str === "string") {
//     // const arr = str.split("");
//     const arr = [...str];
//     arr.forEach((ele) => {
//       if (!isNaN(+ele)) {
//         count++;
//       }
//     });
//     return count;
//   } else {
//     return "Please, enter string!";
//   }
// }

// const result = countDigits("ad2a54y79wet0sfgb9");
// console.log("result:", result);

// C-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// const checkContent = (str1, str2) => {
//   const sorted1 = str1.split("").sort().join("");
//   const sorted2 = str2.split("").sort().join("");
//   return sorted1 === sorted2 ? true : false;
// };
// const result = checkContent("mitgroup", "gmtiprou");
// console.log("result:", result);

// D-TASK:

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda
// classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va
// 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// const moment = require("moment");

// class Shop {
//   constructor(product1, product2, product3) {
//     this.product1 = product1;
//     this.product2 = product2;
//     this.product3 = product3;
//   }
//   qoldiq() {
//     const time = moment().format("HH:mm");
//     console.log(
//       `hozir ${time} da ${this.product1}ta non, ${this.product2}ta lagmon va ${this.product3}ta cola mavjud!`
//     );
//   }
//   sotish(productName, amount) {
//     switch (productName) {
//       case "non":
//         this.product1 >= amount
//           ? (this.product1 -= amount)
//           : console.log("bizda buncha mahsulot yetarli emas");
//         break;
//       case "lagmon":
//         this.product2 >= amount
//           ? (this.product2 -= amount)
//           : console.log("bizda buncha mahsulot yetarli emas");
//         break;
//       case "cola":
//         this.product3 >= amount
//           ? (this.product3 -= amount)
//           : console.log("bizda buncha mahsulot yetarli emas");
//         break;
//       default:
//         console.log("Siz kiritgan mahsulot nomi bizda yoq");
//         break;
//     }
//   }
//   qabul(productName, amount) {
//     switch (productName) {
//       case "non":
//         this.product1 += amount;
//         break;
//       case "lagmon":
//         this.product2 += amount;
//         break;
//       case "cola":
//         this.product3 += amount;
//         break;
//       default:
//         console.log("Siz kiritgan mahsulot nomi bizda yoq");
//         break;
//     }
//   }
// }

// E-TASK:

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

const getReverse = (str) => {
  if (typeof str === "string") {
    return [...str].reverse().join("");
  } else {
    console.log("Please, enter string");
  }
};
const result = getReverse("hello");

console.log("Result:", result);
