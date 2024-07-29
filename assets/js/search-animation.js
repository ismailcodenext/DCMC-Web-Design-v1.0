

let search_btn = document.getElementById('search_btn'),
    searchInput = document.getElementById('search-input'),
    searchClose = document.getElementById('searchbox-close'),
    searchLink = document.getElementById('search');

let searchToggle = () => {
  if (search_btn.className === 'show') {
    search_btn.className = 'hide';
    searchLink.className = '';
    searchInput.value = '';
    searchInput.blur();
  } else {
    search_btn.className = 'show';
    searchLink.className = 'active';
    searchInput.focus();
  }
}, searchEnter = (event) => {
    if (event.keyCode == 13) {
      searchToggle();
    }
};

searchLink.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click event from propagating to the document
  searchToggle();
});

searchClose.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click event from propagating to the document
  searchToggle();
});

searchInput.addEventListener('keyup', searchEnter);

document.addEventListener('click', (event) => {
  // Check if the click is outside the search box and its related elements
  if (!search_btn.contains(event.target) && !searchLink.contains(event.target)) {
    if (search_btn.className === 'show') {
      searchToggle();
    }
  }
});
