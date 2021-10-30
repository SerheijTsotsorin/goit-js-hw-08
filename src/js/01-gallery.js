import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryEl = document.querySelector(".gallery");


const createItem = galleryItems.map((el, index) =>
    `<div class="gallery__item"> 
    <a class="gallery__link" href="${el.original}"> 
    <img class="gallery__image" src="${el.preview}" 
    data-source="${el.original}"
    data-index="${index}"
    alt="${el.description}"/></a></div>`).join('');

galleryEl.insertAdjacentHTML('beforeend', createItem);

const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250});
lightbox.on('show.simplelightbox');


console.log(galleryEl);
console.log(galleryItems);
