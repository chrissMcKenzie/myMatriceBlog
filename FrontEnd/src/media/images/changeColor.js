document.addEventListener("DOMContentLoaded", () => {
  const COLOR = ["blue", "red", "yellow", "green", "black"];
  COLOR.forEach((color) => {
    const myID = document.getElementById(color);
    myID.addEventListener("mouseover", () => {
          square.style.backgroundColor = color;
    });
  });
});
