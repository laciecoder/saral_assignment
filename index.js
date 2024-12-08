const input = document.getElementById("input_text");
const button = document.getElementById("submit");

const error = document.getElementById("error");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  error.innerHTML = "";
  output.innerHTML = "";
});

button.addEventListener("click", () => {
  let text = input.value;
  text = text.trim();
  if (text) {
    output.innerHTML = `Hi Awesome!, You entered <span>${text}</span>, Have a nice day!`;
  } else {
    error.innerHTML = "Hi Awesome! Invalid Input it seems.";
  }
});
