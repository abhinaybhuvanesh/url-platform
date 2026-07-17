// auth.js — simple helpers for storing/reading the JWT token

export function saveToken(token) {
  localStorage.setItem('token', token);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function clearToken() {
  localStorage.removeItem('token');
}

export function isLoggedIn() {
  return !!getToken(); // true if a token exists
}