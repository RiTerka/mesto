let anchor = document.querySelector(".profile__edit");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".modal__close-btn");
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__contact-info");
let jobInput = document.querySelector(".form__delivery-info");


function openFrom() {
    modal.classList.add("modal_active");
    document.body.classList.add("body_hidden");
}

function closeFrom() {
    modal.classList.remove("modal_active");
    document.body.classList.remove("body_hidden");
}

anchor.addEventListener("click", openFrom);
closeBtn.addEventListener("click", closeFrom);

function formSubmitHandler(evt) {
    evt.preventDefault();

    let name = document.querySelector(".profile__text-name");
    let info = document.querySelector(".profile__text-info");

    name.textContent = nameInput.value;
    info.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

