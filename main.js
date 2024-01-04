let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let heading = document.querySelector(".color");
  let randomcolor = getRandomColor();
  heading.innerText = randomcolor;

  let box = document.querySelector(".box");
  box.style.backgroundColor = randomcolor;
});

const getRandomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  return color;
};
