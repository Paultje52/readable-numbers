let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let result = [];
for (let a of alphabet) {
  for (let b of alphabet) {
    result.push(a+b);
  }
}

let formats = ["", "K", "M", "B", "T", ...result];

/**
 * Formats a big number into a human-readable format!
 * @param {number} number The number you want to format
 * @param {number} decPlaces How many decimals you want
 * @param {boolean} formatThousand If numbers in the thousand range should get a K suffix
 * @returns {string} The formatted number
 * 
 * @example
 * const readable = require("readable-numbers");
 * console.log(readable(16734239434)); // 16.7B
 * console.log(readable(21485345, 2)); // 21.48M
 * console.log(readable(4625, 1, true)); // (default) 4,6K
 * console.log(readable(4625, 1, false)); // 4,625
 */
function readables(number, decPlaces = 1, formatThousand = true) {  
  if (!formatThousand && number <= 999999) return number.toLocaleString("en");
  
  if (number.toString().includes("e")) number = BigInt(number);
  
  let splitted = number.toString().split("");
  if (splitted.length <= 3) return number.toString();
  let result = Math.floor((splitted.length-1)/3);
  
  let decimals = splitted.slice(0, -result*3+decPlaces);
  decimals.splice(splitted.slice(0, -result*3).length, 0, ".");
  decimals = decimals.join("");

  let nulls = "";
  for (let i = 0; i < decPlaces; i++) nulls += "0";
  if (decimals.split(".")[1] === nulls) decimals = decimals.split(".")[0];
  
  if (!formats[result]) formats[result] = "Ω";
  return decimals + formats[result];
}

module.exports = exports = readables;
exports.formats = formats;
exports.setFormats = (f) => { formats  = f };
