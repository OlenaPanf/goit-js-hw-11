import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';

const searchForm = document.querySelector('.form');
const inputElement = document.querySelector('.search-input');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', submitHandle);
