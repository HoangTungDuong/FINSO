import { USER_DATA } from "../constants/common";
export function getUserDataLocalStorage(){
  let data = localStorage.getItem(USER_DATA);
  if(!data || data.length === 0){
    return;
  }
  return JSON.parse(data);
}