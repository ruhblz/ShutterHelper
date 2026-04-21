

function filterSelection(category) {
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    item.classList.remove("show");

    if (category === "all" || item.classList.contains(category)) {
      item.classList.add("show");
    }
  });
}

// Highlight active button
const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", function () {
    const current = btnContainer.querySelector(".active");
    if (current) current.classList.remove("active");
    this.classList.add("active");
  });
});
