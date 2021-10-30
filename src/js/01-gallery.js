// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line


const galleryEl = document.querySelector(".gallery");

for (let index = 0; index < galleryItems.length; index++) {
    const element = galleryItems[index];

    const preview = element.preview;
    const image = document.createElement("img");
    const div = document.createElement("div");
    const link = document.createElement("a");

    image.src = preview;
    image.alt = "Image description";
    link.href = element.original;
    
    image.classList.add("gallery__image");
    link.classList.add("gallery__item");

    
    link.appendChild(image);
    galleryEl.appendChild(link);
};

console.log(galleryItems);
