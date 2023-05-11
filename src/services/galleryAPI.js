import axios from 'axios';

const API_KEY = '34735624-4b76f542e0da2b11ccd2d9be8';
const BASE_URL = 'https://pixabay.com/api/';

const galleryAPI = (value, page = 1) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  });

  return axios.get(`${BASE_URL}?${searchParams}`);
};

export default galleryAPI;
