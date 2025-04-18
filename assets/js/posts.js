import { getIdFromURL ,loadDataFromJSONFile} from './module.js';

function renderPosts(posts) {
  const postContainer = document.querySelector(".posts-container");

  if (posts.length === 0) {
    postContainer.innerHTML = `
      <center>
        <div class="alert alert-info mt-3">No posts available</div>
        <a class="btn btn-primary" href="explore.html"><i class="far fa-compass"></i> Explore</a>
      </center>
    `;
    return;
  }

  // select required posts based on the page
  if(window.location.href.includes('HomePage.html')){
    posts.sort((a,b)=> b.id - a.id).forEach(p => {
      const postElement = createPostElement(p);
      postContainer.appendChild(postElement);
    });
  }else if (window.location.href.includes('profile.html')){
    const id = getIdFromURL();
    let userPosts = posts.filter((post) => post.profileId === id);
    userPosts.forEach(p => {
      const postElement = createPostElement(p);
      postContainer.appendChild(postElement);
    });
  }else if(window.location.href.includes('savedPosts.html')){
    posts.forEach(p => {
      if(p.saved){
        const postElement = createPostElement(p);
        postContainer.appendChild(postElement);
      }
    });
  }else if(window.location.href.includes('comments.html')){
    let post = posts.filter((post) => post.id == getIdFromURL());
    postContainer.appendChild(createPostElement(post[0]));
  }
  else if(window.location.href.includes('explore.html')){
    posts.sort((a,b)=> b.id - a.id).forEach(p => {
      const postElement = createPostElement(p);
      postContainer.appendChild(postElement);
    });
  }
}

function createPostElement(p) {
  const post = document.createElement('div');
  post.className = 'card mt-3 post';
  post.dataset.postId = p.id;
  post.innerHTML = `
    <div class="card-header d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img class="person-img rounded-circle" src="${p.profilePicPath}" alt="${p.username}'s profile picture">
        <div class="post-info ml-3">
          <a href='profile.html?id=${p.profileId}' data-profileId='${p.profileId}'><h5>${p.username}</h5></a>
          <p class="post-time text-muted mb-0">Posted ${p.time}</p>
        </div>
      </div>
      ${p.profileId == localStorage.getItem('id') ? `
        <div>
          <div class="btn-group" role="group">
            <a href="#" class="btn btn-sm btn-outline-primary remove-right-border edit-post">
              <i class="fa-solid fa-pen-to-square"></i>
            </a>
            <button class="btn btn-sm btn-outline-danger delete-post">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ` : ''}
    </div>
    <div class="card-body">
      <p class="card-text mb-0">${p.content}</p>
      ${handleMediaElement(p)}
    </div>
    <div class="card-footer d-flex justify-content-between align-items-center">
      <div>
        <button class="btn btn-icon p-2 fs-6 ml-2 like">
          ${p.liked ? `<i class="fa fa-thumbs-up"></i>` : `<i class="far fa-thumbs-up"></i>`}
          <a href='#' class="like-count">${p.likesCount}</a>
        </button>
        <a href="comments.html?id=${p.id}" class="btn btn-icon comment">
          <i class="far fa-comment"></i>
          <span>${p.commentCount}</span>
        </a>
      </div>
      <div>
        <button class="btn savePost btn-icon">
          ${p.saved ? `<i class="fa fa-bookmark"></i>` : `<i class="far fa-bookmark"></i>`}
        </button>
      </div>
    </div>
  `;
  return post;
}

function handleMediaElement(p) {
  if (p.media) {
    const fileExtension = p.media.split('.').pop().toLowerCase();
    const allowedImageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    const allowedVideoExtensions = ["mp4", "avi", "mov", "wmv"];
    const allowedAudioExtensions = ["mp3", "wav", "ogg", "m4a"];

    let mediaElement = '';

    if (allowedImageExtensions.includes(fileExtension)) {
        mediaElement = `<img class="card-img mt-3" src="${p.media}" alt="Uploaded Image">`;
    } else if (allowedVideoExtensions.includes(fileExtension)) {
        mediaElement = `
            <video controls class="card-img mt-3">
                <source src="${p.media}" type="video/mp4">
                Your browser does not support the video tag.
            </video>`;
    } else if (allowedAudioExtensions.includes(fileExtension)) {
        mediaElement = `
            <audio controls class="card-img mt-3">
                <source src="${p.media}" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>`;
    } else {
        mediaElement = `<a href="${p.media}" target="_blank">View File</a>`;
    }
    return mediaElement;
  }else{
    return '';
  }
}

document.addEventListener('DOMContentLoaded', loadDataFromJSONFile(renderPosts,'posts'));
