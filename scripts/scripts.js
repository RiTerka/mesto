let profileButtonEdit = document.querySelector(".profile__edit");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".modal__close-btn");
let formElement = document.querySelector(".form");
let inputName = document.querySelector(".form__input_name_edit");
let inputInfo = document.querySelector(".form__input_info_edit");
let profileName = document.querySelector(".profile__text-name");
let profileInfo = document.querySelector(".profile__text-info");


function openFrom() {
    modal.classList.add("modal_active");
    inputName.value = profileName.textContent;
    inputInfo.value = profileInfo.textContent;
}

function closeFrom() {
    modal.classList.remove("modal_active");

}

profileButtonEdit.addEventListener("click", openFrom);
closeBtn.addEventListener("click", closeFrom);

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = inputName.value;
    profileInfo.textContent = inputInfo.value;

    closeFrom()
}

formElement.addEventListener('submit', formSubmitHandler);

