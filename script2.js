//loading
const loadingElement = document.querySelector('.loading');

setTimeout(() => {
    loadingElement.remove();
}, 3000);

const loaderElement = document.createElement('div');
loaderElement.classList.add('loader');
loadingElement.appendChild(loaderElement);

//loading time

// Get the loading element and the div element
// const loadingElement = document.querySelector('.loading');
const divElement = document.querySelector('.emt');

// Simulate a delay (e.g., for loading data)
setTimeout(() => {
  // Remove the loading element
  loadingElement.style.display = 'none';
  
  // Display the div element
  divElement.style.display = 'inline';
}, 3000);
