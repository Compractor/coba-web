function login() {
  const user = document.querySelector(".user").value;
  const pass = document.querySelector(".pass").value;
  let form = document.querySelector(".form");

  if (user == "admin" && pass == "123") {
    form.setAttribute("action", "dashboard.html");
  }
}

const log = document.querySelector(".btn-login");
const form = document.querySelector(".form-box");
const close = document.querySelector(".close");
const main = document.querySelector(".main");

log.addEventListener("click", function () {
  form.classList.toggle("login-pop");
  log.classList.toggle("btn-press");
  main.classList.toggle("media");
});

close.addEventListener("click", function () {
  form.classList.remove("login-pop");
  log.classList.remove("btn-press");
  main.classList.remove("media");
});

const icon = document.querySelector(".icon-mail");
icon.removeAttribute("title");
