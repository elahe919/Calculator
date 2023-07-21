const resultDisplay = document.querySelector(".result-display");


function showItem(event) {
  const a = event.target.innerText;
  if (resultDisplay.innerHTML == 0) {
    return (resultDisplay.innerHTML = a);
  } 
    return (resultDisplay.innerHTML += a);
}

function calculate(){
    let result = resultDisplay.innerText;
    resultDisplay.innerText = eval(result);
}

function clearAll() {
  resultDisplay.innerText = 0;
}

function clear() {
  let displayText = resultDisplay.innerText;
  if (displayText.length === 1) {
    resultDisplay.innerText = 0;
  } else {
    resultDisplay.innerText = displayText.substring(0, displayText.length - 1);
  }
}


document
  .querySelector(".result")
  .addEventListener("click", calculate);
document
  .querySelector(".clear-all")
  .addEventListener("click", clearAll);
document
  .querySelector(".clear-last")
  .addEventListener("click", clear);

let showKey = document.querySelectorAll(".key");
showKey.forEach(element => {
    element.addEventListener("click", showItem);
  });


