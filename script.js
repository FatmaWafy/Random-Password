let input = document.getElementById("Password");
let message = document.getElementById("message");
let Button = document.querySelector(".container button");
let Copy = document.querySelector(".container .display img");
let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerCase = "abcdefghijklmnopqrstuvwxyz";
let Numbers = "0123456789";
let Symbol = "@#$%^&*()_+~|}{[]></-=";
let Length = 16;

function CreatePassword() {
  let Password = "";
  while (Length > Password.length) {
    Password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    Password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
    Password += Numbers[Math.floor(Math.random() * Numbers.length)];
    Password += Symbol[Math.floor(Math.random() * Symbol.length)];
  }
  input.value = Password;
}

function CopyPassword() {
  if (input.value !== "") {
    navigator.clipboard.writeText(input.value);
    message.style.display = "block";
  }
}

Button.addEventListener("click", () => {
  CreatePassword();
});

Copy.addEventListener("click", () => {
  CopyPassword();
});
