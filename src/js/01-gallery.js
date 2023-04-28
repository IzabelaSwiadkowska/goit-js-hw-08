/* eslint-disable import/no-extraneous-dependencies */
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const items = [];
// eslint-disable-next-line arrow-parens
galleryItems.forEach(element => {
  const newGallery = document.createElement('li');
  newGallery.className = 'gallery__item';
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;
  const galleryImg = document.createElement('img');
  galleryImg.className = 'gallery__image';
  galleryImg.src = element.preview;
  galleryImg.alt = element.description;
  newGallery.append(galleryLink);
  galleryLink.append(galleryImg);
  items.push(newGallery);
});
gallery.append(...items);

// eslint-disable-next-line no-new, no-undef
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
