const result = document.getElementById("result");
let currentOperator = "";
let firstNumber = "";
let secondNumber = "";

function setNumber(number) {
  if (currentOperator && secondNumber) {
    result.innerHTML += number;
    secondNumber += number;
  } else if (!currentOperator) {
    if (result.innerHTML === "0") {
      firstNumber = number;
      result.innerHTML = number;
    } else {
      firstNumber += number;
      result.innerHTML += number;
    }
  } else {
    secondNumber = number;
    result.innerHTML = number;
  }
}

function setOperator(operator) {
  currentOperator = operator;
}

function resulting() {
  switch (currentOperator) {
    case "+":
      result.innerHTML = +firstNumber + +secondNumber;
      break;
    case "-":
      result.innerHTML = +firstNumber - +secondNumber;
      break;
    case "*":
      result.innerHTML = +firstNumber * +secondNumber;
      break;
    case "/":
      result.innerHTML = +firstNumber / +secondNumber;
      break;
  }
}

function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  let timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").textContent = timeString;
}
setInterval(updateTime, 1000);

const trueKey = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

document.addEventListener("keydown", (event) => {
  if (trueKey.includes(event.key)) {
    setNumber(event.key);
  }

  if (event.key === "Backspace") {
    if (firstNumber && !secondNumber) {
      firstNumber = firstNumber.slice(0, firstNumber.length - 1);
      result.innerHTML = firstNumber;
      if (firstNumber === "") {
        firstNumber = 0;
        result.innerHTML = 0;
      }
    } else if (firstNumber && secondNumber) {
      secondNumber = secondNumber.slice(0, secondNumber.length - 1);
      result.innerHTML = secondNumber;
      if (secondNumber === "") {
        secondNumber = 0;
        result.innerHTML = 0;
      }
    }
  }
});
