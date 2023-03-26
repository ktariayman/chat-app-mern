export const logout = () => {
  localStorage.clear();
  window.location.pathname = '/login';
};
export const profile = () => {
  window.location.pathname = '/profile';
};
