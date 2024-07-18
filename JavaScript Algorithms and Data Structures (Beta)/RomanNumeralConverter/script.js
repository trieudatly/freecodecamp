const form = document.getElementById("form");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

// const convertToRoman = num => {
//   const ref = [
//     ['M', 1000],
//     ['CM', 900],
//     ['D', 500],
//     ['CD', 400],
//     ['C', 100],
//     ['XC', 90],
//     ['L', 50],
//     ['XL', 40],
//     ['X', 10],
//     ['IX', 9],
//     ['V', 5],
//     ['IV', 4],
//     ['I', 1]
//   ];
//   const res = [];

//   ref.forEach(function (arr) {
//     while (num >= arr[1]) {
//       res.push(arr[0]);
//       num -= arr[1];
//     }
//   });

//   return res.join('');
// };

const convertToRoman = (num) => {
  const ref = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  console.log("num: " + num);
  if (num == 0) {
    return "";
  }
  //console.clear();
  for (const arr of ref) {
    if (num >= arr[1]) {
      // Append the corresponding symbol and recursively process the remainder
      console.log("num: " + num + "  " + arr[0]);
      return arr[0] + convertToRoman(num - arr[1]);
    }
  }
};
const isValid = (str) => {
  const inputInt = parseInt(str);
  let errText = "";

  if (!str || isNaN(inputInt)) {
    errText = "Please enter a valid number.";
  } else if (inputInt < 1) {
    errText = "Please enter a number greater than or equal to 1.";
  } else if (inputInt > 3999) {
    errText = "Please enter a number less than or equal to 3999.";
  } else {
    // No errors detected
    output.innerText = convertToRoman(inputInt);
    return;
  }

  // Handle error text and output styling
  output.innerText = errText;
  output.classList.add("alert");

  //return false;
};
const clearOutput = () => {
  output.innerText = "";
  output.classList.remove("alert");
};
const updateUI = () => {
  const numStr = document.getElementById("number").value;

  output.classList.remove("hidden");

  clearOutput();

  isValid(numStr);
};
convertButton.addEventListener("click", () => {
  updateUI();
});
