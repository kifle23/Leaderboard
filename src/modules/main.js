import displayBoard from './view.js';
import postScore from './postScoresAPI.js';

document.getElementById('btn-refresh').addEventListener('click', displayBoard);

const resetForm = () => {
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
};

const form = document.getElementById('add-new-info');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;

  postScore(name, score);
  resetForm();
});

displayBoard();
