import fetchData from './http';

function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}
export default getLevel;
