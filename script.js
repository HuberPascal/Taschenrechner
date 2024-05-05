let decimalPointUsed = false;

function appendOperation(operation) {
  document.getElementById("resultContainer").innerHTML += operation;
}

function clearDisplay() {
  let container = document.getElementById("resultContainer");
  if (container.innerHTML.endsWith(" ")) {
    container.innerHTML = container.innerHTML.slice(0, -3);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
  }
}

function calculateResult() {
  let container = document.getElementById("resultContainer");

  if (container.innerHTML != "") {
    let result = eval(container.innerHTML);
    container.innerHTML = result;
  }
}
