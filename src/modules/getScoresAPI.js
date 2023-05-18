const getScores = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/W957Sy4qQMcedjKnsxRS/scores/';
  const response = await fetch(url);
  const { result } = await response.json();

  return result;
};

export default getScores;
