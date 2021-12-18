const profileEdit = document.querySelector('.profile__edit');
const addBtn = document.querySelector('.profile__add');
const closeBtn = document.querySelectorAll('.modal__close-btn');
const editModal = document.querySelector('.modal-profile');
const addModal = document.querySelector('.modal-add');
const imgModal = document.querySelector('.modal-img');
const inputName = document.querySelector('.form__input_name_edit');
const inputJob = document.querySelector('.form__input_info_edit');
const profileTitle = document.querySelector('.profile__text-name');
const profileSubtitle = document.querySelector('.profile__text-info');
const imgList = document.querySelector('.element__items');
const cards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

cards.forEach(elem => {
    imgList.append(imgAdd(elem));
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

function editForm(evt) {
    evt.preventDefault();
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputJob.value;
    closeModal(editModal);
}

function addForm(evt) {
    evt.preventDefault();
    const imgTitle = document.querySelector('.form__input_title_edit');
    const imgLink = document.querySelector('.form__input_img_link');
    const imgAddNew = imgAdd({ link: imgLink.value, name: imgTitle.value });
    imgList.prepend(imgAddNew);
    document.forms['add-img'].reset();
    closeModal(addModal);
}

function imgAdd(elem) {
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
    function openimgModal() {
        const figurePicture = document.querySelector('.modal-img');
        const figureTitle = document.querySelector('.modal__img-title');
        figurePicture.src = imgElemLink.src;
        figurePicture.alt = imgElemTitle.textContent;
        figureTitle.textContent = imgElemTitle.textContent;
        openModal(imgModal);
    }
    imgElemLink.addEventListener("click", openimgModal);
    return imageCard;
}

profileEdit.addEventListener('click', openEditForm);
addBtn.addEventListener('click', openAddCardForm);

closeBtn.forEach((elem) => {
    const activeModal = elem.closest('.modal');
    elem.addEventListener('click', () => closeModal(activeModal));
});

editModal.addEventListener('submit', editForm);
addModal.addEventListener('submit', addForm);