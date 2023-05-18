const postScores = async (name, score) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/W957Sy4qQMcedjKnsxRS/scores/';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ user: name, score }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return response.json();
};

export default postScores;
