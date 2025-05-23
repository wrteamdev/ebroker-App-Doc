"use strict";

let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#fff";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#fff";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = 0;
        toggles[j].style.color = "#fff";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
}

let counter = document.querySelectorAll(".counter");
let arr = Array.from(counter);

arr.map((item) => {
  let count = item.innerHTML;
  item.innerHTML = "";
  let countNumber = 0;

  function counterUp() {
    item.innerHTML = countNumber++;
    if (countNumber > count) {
      clearInterval(stop);
    }
  }
  let stop = setInterval(() => {
    counterUp();
  }, item.dataset.speed / count);
});
