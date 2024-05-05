let decimalPointUsed = false;

function appendOperation(operation) {
  if (operation === "." && decimalPointUsed) {
    return;
  }

  document.getElementById("resultContainer").innerHTML += operation;

  if (operation === ".") {
    decimalPointUsed = true;
  }
}

function clearDisplay() {
  let container = document.getElementById("resultContainer");
  if (container.innerHTML.endsWith(" ")) {
    container.innerHTML = container.innerHTML.slice(0, -3);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
  }

  if (
    container.innerHTML.slice(-1) !== "." &&
    !container.innerHTML.includes(".")
  ) {
    decimalPointUsed = false;
  }
}

function calculateResult() {
  let container = document.getElementById("resultContainer");

  if (container.innerHTML != "") {
    let result = eval(container.innerHTML);
    container.innerHTML = result;
  }
}
