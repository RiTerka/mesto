const profileEditBtn = document.querySelector('.profile__edit');
const addBtn = document.querySelector('.profile__add');
const closeBtn = document.querySelectorAll('.modal__close-btn');
const editModal = document.querySelector('.modal-profile');
const addModal = document.querySelector('.modal-add');
const imgModal = document.querySelector('.modal-img');
const inputName = document.querySelector('.form__input_name_edit');
const inputJob = document.querySelector('.form__input_info_edit');
const imgTitle = document.querySelector('.form__input_title_edit');
const imgLink = document.querySelector('.form__input_img_link');
const profileTitle = document.querySelector('.profile__text-name');
const profileSubtitle = document.querySelector('.profile__text-info');
const figurePicture = document.querySelector('.modal__img');
const figureTitle = document.querySelector('.modal__img-title');
const imgList = document.querySelector('.element__items');


cards.forEach(elem => {
    imgList.append(createCard(elem));
});


function openModal(elem) {
    elem.classList.add('modal_active');
}

function closeModal(elem) {
    elem.classList.remove('modal_active');
}

function openEditForm() {
    inputName.value = profileTitle.textContent;
    inputJob.value = profileSubtitle.textContent;
    openModal(editModal);
}

function openAddCardForm() {
    openModal(addModal);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputJob.value;
    closeModal(editModal);
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const imgAddNew = createCard({ link: imgLink.value, name: imgTitle.value });
    imgList.prepend(imgAddNew);
    document.forms['add-img'].reset();
    closeModal(addModal);
}

function createCard(elem) {
    const imgElemTemplate = document.querySelector('#image-element-template').content;
    const imageCard = imgElemTemplate.cloneNode(true);
    const imgElemLink = imageCard.querySelector('.image-element__pic');
    const imgElemTitle = imageCard.querySelector('.image-element__title');
    const imgElemLike = imageCard.querySelector('.image-element__like');
    const imgElemDelete = imageCard.querySelector('.image-element__delete');
    imgElemLink.src = elem.link;
    imgElemLink.alt = elem.name;
    imgElemTitle.textContent = elem.name;
    imgElemLike.addEventListener('click', function (evt) {
        evt.target.classList.toggle('image-element__like_active');
    });
    imgElemDelete.addEventListener('click', (evt) => {
        evt.target.closest('.image-element').remove();
    });
    function openImgModal() {
        figurePicture.src = imgElemLink.src;
        figurePicture.alt = imgElemTitle.textContent;
        figureTitle.textContent = imgElemTitle.textContent;
        openModal(imgModal);
    }
    imgElemLink.addEventListener("click", openImgModal);
    return imageCard;
}

profileEditBtn.addEventListener('click', openEditForm);
addBtn.addEventListener('click', openAddCardForm);

closeBtn.forEach((elem) => {
    const activeModal = elem.closest('.modal');
    elem.addEventListener('click', () => closeModal(activeModal));
});

editModal.addEventListener('submit', handleProfileFormSubmit);
addModal.addEventListener('submit', handleCardFormSubmit);