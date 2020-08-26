import { API_KEY } from "../constants/common";

export function getCustomNews(keyword) {
  let date = new Date();
  date = date.toISOString().slice(0, 10);
  const url = `http://newsapi.org/v2/everything?q=${keyword}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

