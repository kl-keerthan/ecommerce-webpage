// Toggle Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Carousel Functionality
const carousel = document.querySelector('#carouselExampleCaptions');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carouselInner.querySelectorAll('.carousel-item');
const carouselIndicators = carousel.querySelectorAll('.carousel-indicator');

let currentSlide = 0;

setInterval(() => {
  currentSlide++;
  if (currentSlide >= carouselItems.length) {
    currentSlide = 0;
  }
  carouselItems.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentSlide) {
      item.classList.add('active');
    }
  });
  carouselIndicators.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === currentSlide) {
      indicator.classList.add('active');
    }
  });
}, 3000);

// Search Bar Functionality
const searchBar = document.querySelector('.search-bar');
const searchInput = searchBar.querySelector('input');
const searchSuggestions = searchBar.querySelector('.search-suggestions');

searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value.trim();
  if (inputValue) {
    // Fetch search suggestions from API or local data
    const suggestions = [
      'Suggestion 1',
      'Suggestion 2',
      'Suggestion 3',
    ];
    searchSuggestions.innerHTML = '';
    suggestions.forEach((suggestion) => {
      const suggestionElement = document.createElement('div');
      suggestionElement.textContent = suggestion;
      searchSuggestions.appendChild(suggestionElement);
    });
    searchSuggestions.classList.add('show');
  } else {
    searchSuggestions.classList.remove('show');
  }
});

// Accordion Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;
    accordionContent.classList.toggle('show');
  });
});

// Modal Window Functionality
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalWindows = document.querySelectorAll('.modal-window');

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const modalWindow = trigger.getAttribute('data-modal');
    const modal = document.querySelector(`#${modalWindow}`);
    modal.classList.add('show');
  });
});

modalWindows.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
});
