import { fetchDataFromLocalStorage } from './module.js';

// delete post 
document.addEventListener('click', (e) => {
  let target = e.target;
  if(target.className.includes('delete-post')) {
    console.log('delete post');
    deletePost(target);
  }
});

function deletePost(target) {
  window.location.href = './HomePage.html';
}

// delete comment
const commentContainer = document.querySelector('.comments');
commentContainer.addEventListener('click', (e) => {
  let target = e.target;
  if(target.className.includes('delete-comment')) {
    deleteComment(target);
  }
});

function deleteComment(target) {
  target.closest('.comment').remove();
}


// add comment
const commentForm = document.querySelector('#comment_form');
commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const commentInput = document.querySelector('#comment_txt');
  const comment = commentInput.value;
  if(comment) {
    addComment(comment);
    commentInput.value = '';
  }
});

function addComment(comment) {
  const commentsContainer = document.querySelector('.comments');
  const currentUser = fetchDataFromLocalStorage();
  let c = `<div class='comment'>
            <div class="user-info">
              <img class='person-img' src='${currentUser.imgSrc}' alt='not found'>
              <div class='comment-body'>
                <div class='comment-header'>
                  <a href="profile.html?id=${currentUser.id}"><h5>${currentUser.username}</h5></a>
                  <p class='comment-time'>${new Date().toISOString()}</p>
                </div>
                <div class='comment-content-container'>
                  <div class='comment-content'><p>${comment}</p></div>
                  <div class="comment-buttons">
                    <a class='edit-comment'><i class='fas fa-edit'></i></a>
                    <a class='delete-comment'><i class='fas fa-trash-alt'></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
  commentsContainer.innerHTML += c;
}
