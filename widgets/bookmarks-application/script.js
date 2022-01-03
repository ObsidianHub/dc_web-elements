const modal = document.getElementById('modal'),
  modalShow = document.getElementById('show-modal'),
  modalClose = document.getElementById('close-modal'),
  bookmarkForm = document.getElementById('bookmark-form'),
  websiteNameEl = document.getElementById('website-name'),
  websiteUrlEl = document.getElementById('website-url'),
  bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];

function showModal() {
  modal.classList.add('show-modal');
  websiteNameEl.focus();
}

modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () =>
  modal.classList.remove('show-modal')
);
window.addEventListener('click', (e) =>
  e.target === modal ? modal.classList.remove('show-modal') : false
);
