import Books from './modules/books.js';
import navigation from './modules/navigation.js';
import DateTime from './modules/date.js';

const pages = document.querySelectorAll('.nav-links');
const date = document.getElementById('date');

Books.initialize();

window.addEventListener('DOMContentLoaded', () => {
  navigation(pages);
  date.innerHTML = DateTime.DateTime.now().toLocaleString(DateTime.DATETIME_MED);
});