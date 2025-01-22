import { getIdFromURL , loadDataFromJSONFile} from './module.js';

loadDataFromJSONFile(showComments,'comments');

function showComments(comments){
  const commentsContainer = document.querySelector('.comments');
  comments.filter(x=>x.postId == getIdFromURL()).forEach(comment => {
    let c = `<div class='comment'>
              <div class="user-info">
                <img class='person-img' src='${comment.profilePicPath}' alt='not found'>
                <div class='comment-body'>
                  <div class='comment-header'>
                    <a href="profile.html?id=${comment.profileId}"><h5>${comment.username}</h5></a>
                    <p class='comment-time'>${comment.time}</p>
                  </div>
                  <div class='comment-content-container'>
                    <div class='comment-content'><p>${comment.content}</p></div>
                    ${comment.profileId == localStorage.getItem('id')?
                    `
                    <div class="comment-buttons">
                      <a class='edit-comment'><i class='fas fa-edit'></i></a>
                      <a class='delete-comment'><i class='fas fa-trash-alt'></i></a>
                    </div>
                    `:``}
                  </div>
                </div>
              </div>
            </div>`;
    commentsContainer.innerHTML += c;
  });
}
