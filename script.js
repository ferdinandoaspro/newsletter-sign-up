const form = document.querySelector("form");
const input = document.querySelector("input");
const mail = document.querySelector(".mail");
const content = document.querySelector(".content");
const message = document.querySelector(".message");
const dismiss = document.querySelector(".message button");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    content.classList.toggle("inactive");
    message.classList.toggle("inactive");
    mail.innerText = input.value;
    }
);

dismiss.addEventListener("click", () => {
    content.classList.toggle("inactive");
    message.classList.toggle("inactive");
    input.value = "";
})