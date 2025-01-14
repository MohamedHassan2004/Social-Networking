// posts
let postContainer = document.querySelector(".posts-container");
let posts = [
  {
    id: 1,
    profileId: 1,
    username: "Harry Potter",
    profilePicPath: "profilePics/page2.jpg",
    time: "2 hours ago",
    content: "❤️🪄",
    media: "uploads/xu4g5hyyvlhzoorzjpq5.webp",
    likesCount: 5,
    commentCount: 3,
    liked: 0,
    saved: 0,
    canModify:1
  },
  {
    id: 2,
    profileId: 2,
    username: "Tony Stark",
    profilePicPath: "profilePics/Tony-Stark.jpg",
    time: "5 hours ago",
    content: "",
    media: "uploads/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    likesCount: 4,
    commentCount: 0,
    liked: 0,
    saved: 0,
    canModify:1
  },
  {
    id: 3,
    profileId: 3,
    username: "Ronaldo",
    profilePicPath: "profilePics/cr7.jpg",
    time: "1 day ago",
    content: "",
    media: "uploads/alasan-mengapa-cristiano-ronaldo-dicoret-dari-timnas-portugal-analisis-mendalam.webp",
    likesCount: 10,
    commentCount: 5,
    liked: 1,
    saved: 1,
    canModify:0
  },
  {
    id: 4,
    profileId: 4,
    username: "Mohamed Hassan",
    profilePicPath: "profilePics/avatar.jpg",
    time: "1 week ago",
    content: "سورة الاخلاص",
    media: "uploads/الاخلاص.mp3",
    likesCount: 5,
    commentCount: 0,
    liked: 0,
    saved: 0,
    canModify:0
  }

  ];

if(posts.length === 0){
  postContainer.innerHTML = `
  <br>
  <center>
    <div class="alert alert-info">No posts available</div>
    <a class="btn btn-primary" href="explore.html"><i class="far fa-compass"></i> Explore</a>
  </center>
  `;
}

posts.forEach((p) => {
  post = `
  <div class="card mt-3 post data-post-id="${p.id}">
  <div class="card-header d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <img class="person-img rounded-circle" src="${p.profilePicPath}" alt="Profile Picture">
      <div class="post-info ml-3">
        <a href='' data-profileId='${p.profileId}'><h5>${p.username}</h5></a>
        <p class="post-time text-muted mb-0">Posted ${p.time}</p>
      </div>
      </div>
      ${edit_post(p)}
  </div>

  <div class="card-body">
    <p class="card-text mb-0">${p.content}</p>
    ${handleMediaElement(p)}
  </div>

  <div class="card-footer d-flex justify-content-between align-items-center">
    <div>
      <button class="btn btn-icon p-2 fs-6 ml-2 like">
        ${p.liked?`<i class="fa-solid fa-thumbs-up"></i>`:`<i class="far fa-thumbs-up"></i>`}
        <a href='#' class="like-count">${p.likesCount}</a>
      </button>
      <a href="#" class="btn btn-icon comment">
        <i class="far fa-comment"></i>
        <span>${p.commentCount}</span>
      </a>
    </div>

    <div>
      <button class="btn savePost btn-icon">
        ${p.saved?`<i class="fa-solid fa-bookmark"></i>`:`<i class="far fa-bookmark"></i> </button>`}
    </div>
  </div>

</div>
`;
  postContainer.innerHTML += post;
});


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

function edit_post(p){
  if(p.canModify){
    return `
    <div>
      <div class="btn-group" role="group">
        <a href="#" class="btn btn-sm btn-outline-primary remove-right-border">
          <i class="fa-solid fa-pen-to-square"></i>
        </a>
        <button class="btn btn-sm btn-outline-danger delete-post">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>`;
  }else{
    return '';
  }
  }