let input = document.querySelector("#name-input");
input.addEventListener("input", () => {
  let span = document.querySelector("#name-output");
  if (input.value.trim() === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = input.value;
  }
});