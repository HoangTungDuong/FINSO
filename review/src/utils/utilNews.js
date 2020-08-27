import { API_KEY, SERVER_URL } from "../constants/common";
export function getCustomNews(keyword) {
  const date = convertISODateToFormattedDate(new Date());
  const url = `${SERVER_URL}everything?q=${keyword}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`;
  return callAPI(url)
}

export function convertISODateToFormattedDate(date){
  if(typeof(date) === 'string'){
    return date.slice(0, 10);
  }
  return date.toISOString().slice(0, 10);
}

export function getTopHeadlineNews(){
  const url = `${SERVER_URL}top-headlines?country=us&apiKey=9ea41ca4e5ac4bc18a086df6ec6fb3c9`;
  return callAPI(url)
}

function callAPI(url){
  return fetch(url)
  .then(response => response.json())
  .catch(error => console.log(error))
}
