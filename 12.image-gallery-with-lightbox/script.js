const lightbox = document.querySelector('.lightbox')
const images = document.querySelectorAll('.gallery-image')
const lightboxImg = document.querySelector('.lightbox-image')
const closeBtn = document.querySelector('.close-btn')

const imageSources = [];

images.forEach((img, index) => {
  imageSources[index] = img.src;

  img.addEventListener("click", () => {
    lightboxImg.src = imageSources[index]
    lightboxImg.alt = img.alt
    lightbox.classList.add('active')
  })
})

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active')
})