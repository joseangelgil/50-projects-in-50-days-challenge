const previousBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')
const testimonials = Array.from(document.querySelectorAll('.testimonial'))

function findActiveTestimonial() {
  return testimonials.findIndex(testimonial => testimonial.classList.contains('active')) 
}

previousBtn.addEventListener('click', () => {

  let currentIndex = findActiveTestimonial()
  
  testimonials[currentIndex].classList.remove('active')
  if(currentIndex-1 >= 0) {
    testimonials[currentIndex-1].classList.add('active')
  } else {
    testimonials[testimonials.length - 1].classList.add('active')
  }
})

nextBtn.addEventListener('click', () => {

  let currentIndex = findActiveTestimonial()
  
  testimonials[currentIndex].classList.remove('active')
  if(currentIndex+1 < testimonials.length) {
    testimonials[currentIndex+1].classList.add('active')
  } else {
    testimonials[0].classList.add('active')
  }
})