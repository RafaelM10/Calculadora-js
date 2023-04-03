const lastCalc = document.querySelector("#last-calc");
const span = document.querySelector("span");
const btnCleanNumber = document.querySelectorAll(".deleteNumber");
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll("#operator");
const numbers = document.querySelectorAll(".number");

function clean() {
  let empty = "";
  if (lastCalc) {
    lastCalc.textContent = `${empty}`;
  }
  if (span) {
    span.textContent = `0`;
  }
}

function selectNumber() {
  const clickedElement = (number) => {
    const clickEvent = (event) => {
      const clickedElement = event.target.innerHTML;
      if (span.textContent !== "0") {
        lastCalc.textContent = "";
        span.textContent = "0";
      }
      return (lastCalc.textContent += `${Number(clickedElement)}`);
    };
    number.addEventListener("click", clickEvent);
  };
  numbers.forEach(clickedElement);
}

function addMathematicalOperators() {
  operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
      const removeSpaceConvertToLowercase = event.target.innerHTML
        .trim()
        .toLowerCase();
      let showClickEvent = removeSpaceConvertToLowercase;

      if (showClickEvent === "x") {
        lastCalc.textContent += "*";
      } else {
        lastCalc.textContent += showClickEvent;
      }
    });
  });
}

function calculate() {
  equals.addEventListener("click", () => {
    const expression = lastCalc.textContent;

    let result;
    if (expression.includes("%")) {
      const parts = expression.split("-");
      const value = Number(parts[0]);
      const percent = Number(parts[1].replace("%", "")) / 100;
      result = value - value * percent;
    } else {
      result = eval(expression);
    }

    span.textContent = result;
  });
}

btnCleanNumber.forEach((cleanNumb) => {
  cleanNumb.addEventListener("click", clean);
});

selectNumber();
addMathematicalOperators();
calculate();
