let r1 = 10 + 20;
let r2 = "10" + 20;
let r3 = 10 + "20";
let r4 = "10" + "20";
let r5 = 10 - "3";
let r6 = "10" - "3";
let r7 = 10 + null;
let r8 = "10" + null;
let r9 = 10 + undefined;
let r10 = true + true;

let results = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10];

let i;
for (i = 1; i <= results.length; ++i) {
  console.log(`r${i} = ${results[i-1]} (${typeof(results[i-1])})`);
}
