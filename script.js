const password = document.querySelector("#password");
const overlay = document.querySelector("#overlay");

password.addEventListener("keyup", (e) => {
  console.log(e.target.value.length);

  let password_num = e.target.value.length;
  let blur_val = 30 - password_num * 3;

  overlay.style.filter = `blur(${blur_val}px)`;
});