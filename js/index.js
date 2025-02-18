const btnsignin = document.getElementById("btn-signin");
const form = document.getElementById("form-signin");
const close = document.getElementById("img-close");

btnsignin.addEventListener("click", () => {
  if (form.style.display === "none") {
    form.style.display = "flex";
  } else {
    form.style.display = "none";
  }
});

close.addEventListener("click", () => {
  if (form.style.display === "flex") {
    form.style.display = "none";
  } else {
    form.style.display = "none";
  }
});
