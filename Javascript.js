// Select the element to animate
const mainContent = document.querySelector('main');

// Animate the content on page load
window.onload = () => {
  mainContent.style.opacity = '0';
  let opacity = 0;
  const fadeEffect = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      mainContent.style.opacity = opacity;
    } else {
      clearInterval(fadeEffect);
    }
  }, 100);
};
  
