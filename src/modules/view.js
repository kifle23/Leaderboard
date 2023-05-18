import getScores from './getScoresAPI.js';

const displayBoard = async () => {
  const table = document.getElementById('recent-scores');
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  const scores = await getScores();
  if (scores.length > 0) {
    scores.forEach((s) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
          <td>"${s.user}" scored ${s.score} </td>
        `;
      table.appendChild(tr);
    });
  }
};

export default displayBoard;
