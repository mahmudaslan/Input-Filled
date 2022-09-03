let input = document.querySelector("input");
let cont = document.querySelector(".cont");
let border = document.querySelector(".border");
let maxLength = input.getAttribute("maxLength");

cont.innerHTML = maxLength;

input.addEventListener("input", () => {
  cont.innerHTML = maxLength - input.value.length;
  if (cont.innerHTML == 0) {
    cont.classList.add("zero");
    border.classList.add("filled");
  } else {
    cont.classList.remove("zero");
    border.classList.remove("filled");
  }
  border.style.width = `${(input.value.length * 100) / maxLength}%`;
});
