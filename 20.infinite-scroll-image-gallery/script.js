const imagesContainer = document.querySelector('.gallery-container')

let currentNumImages = 10;

window.addEventListener('scroll', () => {
  const {scrollHeight, clientHeight, scrollTop} = document.documentElement;
  scrollTop + clientHeight > scrollHeight - 100 && loadMoreImages();
})

function loadMoreImages() {

  for(let i = 1; i < 6; i++) {
    imagesContainer.innerHTML += 
      `<li class="gallery-item">
          <img src="https://picsum.photos/300/?random=${currentNumImages + i}" alt="Image ${currentNumImages + i}" class="gallery-image">
      </li>`  
  }

  currentNumImages += 5;
}