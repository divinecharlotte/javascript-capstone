import './styles/style.css';
import displayCards from './modules/itemslist.js';
import { doet } from './modules/comment.js';

displayCards();

const btn = document.querySelector('main');
btn.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    const b = e.target.id;
    doet(b);
  }
});
