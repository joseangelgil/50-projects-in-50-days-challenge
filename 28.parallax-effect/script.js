const layers = document.querySelectorAll('.layer');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  layers.forEach((layer, index) => {
    const speed = (5 - index) * 0.1;
    layer.style.transform = `translateY(${scroll * speed}px)`;
  })
})