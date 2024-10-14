const lightbox = document.querySelector('.lightbox')
const images = document.querySelectorAll('.gallery-image')
const lightboxImg = document.querySelector('.lightbox-image')
const closeBtn = document.querySelector('.close-btn')

images.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src
    lightbox.classList.add('active')
  })
})

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active')
})