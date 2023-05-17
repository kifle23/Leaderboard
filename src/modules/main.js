const displayBoard = () => {
  const form = document.getElementById('add-new-info');
  const table = document.getElementById('recent-scores');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;

    const tr = document.createElement('tr');
    tr.innerHTML = `
          <td>"${name}" scored ${score}</td>
        `;
    table.appendChild(tr);

    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
  });
};
displayBoard();

export default displayBoard;
