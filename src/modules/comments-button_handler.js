const btnComments = document.querySelector('.comment');
const popUpContainer = document.querySelector('.comment_pop-up_container');

btnComments.addEventListener('click', () => {
  popUpContainer.classList.toggle('hidden');
});
