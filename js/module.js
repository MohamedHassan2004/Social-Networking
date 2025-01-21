export function getIdFromURL() { 
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const params = new URLSearchParams(url.search);
  return Number(params.get('id'));
}

export function fetchDataFromLocalStorage() {
  return {
    id: localStorage.getItem('id'),
    username: localStorage.getItem('username'),
    imgSrc: localStorage.getItem('imgSrc')
  };
}