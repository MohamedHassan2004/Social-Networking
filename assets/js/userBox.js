const id = localStorage.getItem('id');
const username = localStorage.getItem('username');
const imgSrc = localStorage.getItem('imgSrc');

let userBox = document.querySelector('.user-box');
userBox.querySelector('a').href = `profile.html?id=${id}`;
userBox.querySelector('h5').textContent = username;
userBox.querySelector('img').src = imgSrc;
userBox.querySelector('img').alt = "profile picture";

