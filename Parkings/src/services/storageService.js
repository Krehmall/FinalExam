const USERS_KEY = "users";
const LOGGED_IN_USER = "loggedInUser";
const CURRECT_CITY = "currectCity";
const HISTORY_KEY = "history";

export const storageService = {
  getUsers() {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },
  saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },
  getLoggedInUser() {
    const loggedInUser = sessionStorage.getItem(LOGGED_IN_USER);
    return loggedInUser ? JSON.parse(loggedInUser) : null;
  },
  saveLoggedInUser(user) {
    sessionStorage.setItem(LOGGED_IN_USER, JSON.stringify(user));
  },
  getCurrectCity() {
    const currectCity = sessionStorage.getItem(CURRECT_CITY);
    return currectCity ? JSON.parse(currectCity) : null;
  },
  saveCurrectCity(city) {
    sessionStorage.setItem(CURRECT_CITY, JSON.stringify(city));
  },
  clearAll() {
    sessionStorage.removeItem(LOGGED_IN_USER);
  },
  getHistory() {
    const history = localStorage.getItem(HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  },
  updateHistory(update) {
    const history = this.getHistory();
    history.push(update);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  },
};
