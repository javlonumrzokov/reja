// console.log("Jack Ma maslahatlari:");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20-30
//   "ozingizni ishingizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga invest qiling", //50-60
//   "endi dam oling, foydasi yoq", //60~
// ];
// CALLBACK functions with setTimeout
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("please, insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(67, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

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

//CALLBACK  setInterval bilan
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("please, insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
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

// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:

function countLetter(letter, word) {
  let count = 0;
  if (typeof word === "string" && typeof letter === "string") {
    word = word.toLowerCase().split("");
    letter = letter.toLowerCase();
    for (const ele of word) {
      if (letter === ele) {
        count++;
      }
    }
    return count;
  } else {
    return "Please, insert a letter for the first argument and a string for the second argument to get a result";
  }
}

const result = countLetter("e", "engineer");

console.log("result:", result);
