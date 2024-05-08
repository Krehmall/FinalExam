import { storageService } from "./storageService";

function createUser(user) {
  const { username, carNumber, carType, password } = user;

  const totalUsers = storageService.getUsers();

  const isExist = totalUsers.some((user) => user.username === username);
  if (isExist) return null;

  const newUser = {
    username,
    carNumber,
    carType,
    password,
  };

  storageService.saveUsers([...totalUsers, newUser]);
  return true;
}

function login(username, password) {
  const users = storageService.getUsers();
  const foundedUser = users.find((user) => user.password === password && user.username === username);

  if (!foundedUser) return null;
  storageService.saveLoggedInUser(foundedUser);
  return foundedUser;
}

function logout() {
  storageService.clearAll();
}

export const userService = { createUser, login, logout };
