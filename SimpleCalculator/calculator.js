let buffer  = "0";
let runningTotal = 0;
let previousOperator = null;
const screen = document.querySelector('.screen');

function buttonClick(value) {
  if(isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }

  rerender();
}

function handleNumber(number) {
  buffer === "0" ? buffer = number : buffer += number;
}

function flushOperation(intBuffer) {
  if(previousOperator === "+") {
    runningTotal += intBuffer;
  } else if(previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if(previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  }
}

function handleMathSymbol(symbol) {
  if(buffer === "0") return;

  let intBuffer = parseInt(buffer);
  runningTotal === 0 ?
  runningTotal = intBuffer :
  flushOperation(intBuffer);

  previousOperator = symbol;
  buffer = "0";
}

function handleSymbol(symbol) {
  switch(symbol) {
    case 'C':
      buffer = "0";
      runningTotal = 0;
      break;
    case '←':
      if(buffer.length === 1) {
        buffer = "0";
        runningTotal = 0;
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case '=':
      if(previousOperator === null) return;
      flushOperation(parseInt(buffer));
      buffer = runningTotal.toString();
      runningTotal = 0;
      previousOperator = null;
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
      handleMathSymbol(symbol);
      break;
    }
}

function init() {
  document
  .querySelector('.calc-buttons')
  .addEventListener('click', function(event) {
    buttonClick(event.target.innerText)
  })
}

function rerender() {
  runningTotal === 0 ?
  screen.innerText = buffer :
  screen.innerText = runningTotal;
}

init();
