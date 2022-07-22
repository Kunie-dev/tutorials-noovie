const API_KEY = '324228478dcf8e030ba46c4bba337236';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchNowPlaying = async () => {
  const {results} = await (
    await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`,
    )
  ).json();

  return results || [];
};

export const fetchUpcoming = async () => {
  const {results} = await (
    await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`,
    )
  ).json();

  return results || [];
};

export const fetchTrending = async () => {
  const {results} = await (
    await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
  ).json();

  return results || [];
};
