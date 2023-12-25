let modeBtn = document.querySelector("#mode");
let currMode = modeBtn.innerText;
let body = document.querySelector("body");
let head = document.querySelector("h2");
modeBtn.addEventListener("click", () => {
  if (currMode === "Light") {
    currMode = "Dark";
    console.log("Light");
    modeBtn.innerText = "Dark";
    body.classList.add("light");
    body.classList.remove("dark");

    //  for button opposite is given

    // for heading
    head.style.color = "black"
  } else {
    currMode = "Light";
    console.log("Dark");
    modeBtn.innerText = "Light";
    body.classList.add("dark");
    body.classList.remove("light");

    //  for button opposite is given
    // for head

    head.style.color = "white"
  }
});
