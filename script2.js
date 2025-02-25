const loadingElement = document.querySelector('.loading');

setTimeout(() => {
    loadingElement.remove();
}, 3000);

const loaderElement = document.createElement('div');
loaderElement.classList.add('loader');
loadingElement.appendChild(loaderElement);


const divElement = document.querySelector('.emt');

setTimeout(() => {
  loadingElement.style.display = 'none';
  
  divElement.style.display = 'inline';
}, 3000);
