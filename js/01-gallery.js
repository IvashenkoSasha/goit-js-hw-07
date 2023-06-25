import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

const markup = galleryItems.map(createMarkup).join('');
list.insertAdjacentHTML('beforeend', markup);

list.addEventListener('click', openModal);

let instance;

function createMarkup(param) {
    return `
<li class="gallery__item">
  <a class="gallery__link" href="${param.original}">
    <img
      class="gallery__image"
      src="${param.preview}"
      data-source="${param.original}"
      alt="${param.description}"
    />
  </a>
</li>
    `;
};

function openModal(evt) {
    if (evt.target !== evt.currentTarget) {
        evt.preventDefault();
    const target = evt.target;
    const img = target.dataset.source;
    const alt = target.alt

    instance = basicLightbox.create(`<img src="${img}" alt="${alt}">`,
        {
            onShow: (instance) => {
                window.addEventListener('keydown', modalEscClose);
            },
            onClose: (instance) => {
                window.removeEventListener('keydown', modalEscClose);
            }
    })
    instance.show();
    };
};

function modalEscClose(evt) {
        if (evt.code !== 'Escape') {
            return;
    };
        if (!instance.visible()) {
            return;
        };
        instance.close();
}
