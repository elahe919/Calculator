let displayBox = document.querySelector(".display");

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clear);


let showKey = document.querySelectorAll(".show-display");
showKey.forEach(element => {
    element.addEventListener("click", showItem);
  });


function showItem(event) {
  const a = event.target.innerText;
  if (displayBox.innerHTML == 0) {
    return displayBox.innerHTML = a;
  } 
    return displayBox.innerHTML += a;
}

function calculate(){
    let cal = displayBox.innerText;
    displayBox.innerText = eval(cal);
}

function allClear() {
  displayBox.innerText = 0;
}

function clear() {
  let displayText = displayBox.innerText;
  if (displayText.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = displayText.substring(0, displayText.length - 1);
  }
}



