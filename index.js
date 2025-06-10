const button = document.querySelector('#buttonMain');
const info = document.querySelector('#info');
const container = document.querySelector('.container');
const avatar = document.querySelector('#avatarBg');
const content = document.querySelector('#content');

button.addEventListener('click', () => {
  container.classList.toggle('active');
  button.classList.toggle('active');
  avatar.classList.toggle('active');
  content.classList.toggle('active');
});
