const animatedItems = document.querySelectorAll(
  ".section, .card, .room-card"
);

window.addEventListener("scroll", () => {
  animatedItems.forEach(item => {
    const position = item.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
});

