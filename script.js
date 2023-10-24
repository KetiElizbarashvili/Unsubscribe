const button = document.getElementById("unsubscribe-button");
const container = document.querySelector(".container");
const maxX = container.clientWidth - button.clientWidth;
const maxY = container.clientHeight - button.clientHeight;

button.addEventListener("mouseenter", () => {
    moveButton();
});

function moveButton() {
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}