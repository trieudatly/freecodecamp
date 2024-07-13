const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (input) => {
  console.log(input);
  if (input === "") {
    alert("Please input a value");
    return;
  }
  const oInput = [...input]
    .filter((char) => {
      return /[a-zA-Z0-9]/.test(char);
    })
    .join("")
    .toLowerCase();
  console.log(oInput);
  const reverseInput = [...oInput].reverse().join("").toLowerCase();
  console.log(reverseInput);
  if (oInput === reverseInput) {
    result.textContent = `${input} is a palindrome`;
  } else {
    result.textContent = `${input} is not a palindrome`;
  }
  // Show the result.
  result.classList.remove("hidden");
};
checkBtn.addEventListener("click", () => {
  result.textContent = "";
  checkPalindrome(textInput.value);
  textInput.value = "";
});
