import axios from 'axios';

const API_KEY = '54965441-9d4dc4d4063faa3b07c399281';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const { data } = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return data;
}
