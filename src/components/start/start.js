import './start.scss';

const startTitle = document.querySelectorAll('.start__title');
window.addEventListener('load', () => {
  startTitle.forEach((title) => {
    title.classList.add('start__title--ready');
  });
});

startTitle.forEach((title) => {
  const titleArray = title.textContent.split('');

  title.textContent = '';
  titleArray.forEach((letter) => {
    if (letter === ' ') {
      const span = document.createElement('span');
      span.textContent = '\u00A0';
      title.append(span);
    } else {
      const span = document.createElement('span');
      span.textContent = letter;
      title.append(span);
    }
  });
});
