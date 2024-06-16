// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const tempearture1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const clcTempAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp != "number") continue;
    if (currTemp > maxTemp) maxTemp = currTemp;
    if (currTemp < minTemp) minTemp = currTemp;
  }
  return maxTemp - minTemp;
};

const amplitude1 = clcTempAmplitude(tempearture1);
console.log(`Amplitude =${amplitude1}`);

// what if we have 2 arrays
const tempearture2 = [3, 2, 6, -1, "error", "error", 5, 9, 11, 38, 34, -7, -3];
const temp = tempearture1.concat(tempearture2);
const amplitude2 = clcTempAmplitude(temp);
console.log(`(Using two array) Amplitude =${amplitude2}`);

console.error(tempearture1);
console.warn(tempearture1);
console.table(tempearture1);

// Challenge

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let str = "...";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days...`;
  }
  return str;
};

console.log(printForecast(temp1));


