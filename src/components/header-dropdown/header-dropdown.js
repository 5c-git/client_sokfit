import './header-dropdown.scss';

// const links = document.querySelectorAll('.header-dropdown__nav-link');
// links.forEach((link) => {
//   const characters = link.textContent.split('');
//   const first = document.createElement('p');
//   first.classList.add('first');
//   const second = document.createElement('p');
//   second.classList.add('second');

//   link.textContent = '';
//   characters.forEach((letter) => {
//     if (letter === ' ') {
//       const span = document.createElement('span');
//       span.textContent = '\u00A0';
//       first.append(span);
//       second.append(span.cloneNode(true));
//     } else {
//       const span = document.createElement('span');
//       span.textContent = letter;
//       first.append(span);
//       second.append(span.cloneNode(true));
//     }
//   });
//   link.append(first);
//   link.append(second);
// });
