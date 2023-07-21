const showKey = document.querySelectorAll(".key");
const resultDisplay = document.querySelector(".result-display")

showKey.forEach(element => {
    element.addEventListener("click",showItem)
});

function showItem(Event) {
   resultDisplay.innerHTML = Event.target.innerHTML;
}