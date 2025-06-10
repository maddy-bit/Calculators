const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      display.textContent = "0";
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } else if (value === "=") {
      try {
        let result = eval(currentInput.replace(/÷/g, "/").replace(/×/g, "*"));
        display.textContent = result;
        currentInput = result.toString();
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
