const form = document.querySelector("form");
const input = document.querySelector("input");
const error = document.querySelector(".error");
const mail = document.querySelector(".mail");
const content = document.querySelector(".content");
const message = document.querySelector(".message");
const dismiss = document.querySelector(".message button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.trim().length === 0) {
        input.required = true;
        error.classList.toggle("inactive");
    } else {
        content.classList.toggle("inactive");
        message.classList.toggle("inactive");
        mail.innerText = input.value.trim();
    }
});

input.addEventListener("input", () => {
    if (input.checkValidity()) {
        input.required = false;
        error.classList.add("inactive");
    } else {
        input.required = true;
        error.classList.remove("inactive");
    }
})

dismiss.addEventListener("click", () => {
    content.classList.toggle("inactive");
    message.classList.toggle("inactive");
    input.value = "";
})